import { useEffect, useState, useRef, useMemo } from "react";
import { useModalContext } from "../Modal/ModalContext";
import { DailyUpdateForm } from "../DailyUpdateForm";
import { getDailyUpdate } from "./../../api/daily-update";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // ADD THIS
import { useUserContext } from "./../../hooks/useUserContext";
import * as React from "react";

interface DailyUpdate {
  note: string;
  rating: number;
  timestamp: number;
}

const extractRatingsWithDays = (updates: DailyUpdate[]) => {
  return {
    type: "line",
    datasets: [
      {
        label: "Samopoczucie",

        data: updates.map((update: DailyUpdate) => {
          const date = new Date(update.timestamp);

          const day = `${date.getDate()}.${
            date.getMonth() + 1
          }.${date.getFullYear()}`;

          return {
            x: day,
            y: update.rating,
          };
        }),
        backgroundColor: "#5b2b5e",
      },
    ],
  };
};

const scales = {
  y: {
    min: 1,
    max: 5
  }
}

export const DailyUpdate = () => {
  const [updates, setUpdates] = useState<DailyUpdate[]>([]);
  const { data: { userId } } = useUserContext();
  const [updated, setUpdated] = useState<boolean>(false);
  const [chartData, setChartData] = useState<object|null>(null);

  const modal = useModalContext();

  useEffect(() => {
    const getLatestStatus = async () => {
      try {
        const response = await getDailyUpdate(userId);

        const sorted = response.sort((a: DailyUpdate, b: DailyUpdate) => {
          return b.timestamp - a.timestamp;
        });

        setUpdates(sorted);
        
        if (sorted.length) setChartData(extractRatingsWithDays(sorted.reverse()));
        
        if (!response.length) {
          modal.openModal(<DailyUpdateForm setUpdated={setUpdated} />)
          return;
        }

        if (!response[0].id) {
          modal.openModal(<DailyUpdateForm setUpdated={setUpdated} />)
          return;
        }

        if (sorted.length) {
          if ((new Date(updates[0].timestamp)).getDate() != (new Date()).getDate()) {
            modal.openModal(<DailyUpdateForm setUpdated={setUpdated} />)
            return;
          }
        }

      } catch (error) {
        console.warn(error);
      }
    };

    getLatestStatus();
  }, [updated]);

  console.log(updates)

  return (
    <div className="w-full my-5">
      <div className="grid grid-cols-2 gap-10">
        <div className="shadow rounded w-full p-5 bg-gray">
          <h3 className="text-xl font-bold">Twój dzisiejszy update</h3>
          <p className="text-l">{(updates && updates.length) ? updates[0].note : null}</p>
        </div>
        <div className="shadow rounded w-full p-5 bg-gray">
          {chartData ? (
            <Chart chartData={chartData}/>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const Chart = React.memo(({chartData}: {chartData:any}) => {
  const ref = useRef();

  if (!chartData) return null;

  return (
    <Line redraw={true} ref={ref} data={chartData} options={scales} />
  )
});