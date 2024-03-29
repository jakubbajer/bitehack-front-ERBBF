import { useEffect, useState, useRef } from "react";
import { useModalContext } from "../Modal/ModalContext";
import { DailyUpdateForm } from "../DailyUpdateForm";
import { getDailyUpdate } from "./../../api/daily-update";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // ADD THIS
import { useUserContext } from "./../../hooks/useUserContext";
import * as React from "react";
import { SuspiciousUpdate } from "../SuspiciousUpdate";
import { useQuery } from "react-query";

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
  const [suspiciousUpdate, setSuspiciousUpdate] = useState<boolean>(false);

  const modal = useModalContext();

  const { data, isLoading } = useQuery({
    queryKey: ["updates"],
    queryFn: () => getDailyUpdate(userId),
  });

  useEffect(() => {
    const getLatestStatus = async () => {
      try {
        const sorted = data.sort((a: DailyUpdate, b: DailyUpdate) => {
          return b.timestamp - a.timestamp;
        });

        setUpdates(sorted);
        
        if (sorted.length) setChartData(extractRatingsWithDays([...sorted].reverse()));
        
        if (!sorted.length) {
          modal.openModal(<DailyUpdateForm setUpdated={setUpdated} setSuspiciousUpdate={setSuspiciousUpdate} />)
          return;
        }

        if (!sorted[0].id) {
          modal.openModal(<DailyUpdateForm setUpdated={setUpdated} setSuspiciousUpdate={setSuspiciousUpdate} />)
          return;
        }

        if (sorted.length) {
          if ((new Date(sorted[0].timestamp)).getDate() != (new Date()).getDate()) {
            modal.openModal(<DailyUpdateForm setUpdated={setUpdated} setSuspiciousUpdate={setSuspiciousUpdate} />)
            return;
          }
        }

      } catch (error) {
        console.warn(error);
      }
    };
    if (!isLoading) {
      getLatestStatus();
    }
  }, [updated, isLoading]);

  useEffect(() => {
    if (suspiciousUpdate)
      modal.openModal(<SuspiciousUpdate/>)
  }, [suspiciousUpdate])

  return (
    <div className="w-full my-10">
      <div className="grid grid-cols-2 gap-10">
        <div className="shadow rounded w-full p-5 bg-primary text-white flex flex-col items-center justify-center relative">
          <h3 className="text-xl font-bold text-center">Twój dzisiejszy update</h3>
          <p className="text-l text-center">{(updates && updates.length) ? updates[0].note : null}</p>
          <p className="hidden md:block absolute top-[60%] text-4xl left-[20%] quote-sign">"</p>
          <p className="hidden md:block absolute top-[30%] text-4xl right-[20%] quote-sign">"</p>
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