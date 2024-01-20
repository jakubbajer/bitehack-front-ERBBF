import { useEffect, useState, useRef } from "react";
import { useModalContext } from "../Modal/ModalContext";
import { DailyUpdateForm } from "../DailyUpdateForm";
import { getDailyUpdate } from "./../../api/daily-update";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // ADD THIS

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

export const DailyUpdate = () => {
  const ref = useRef();
  const [updates, setUpdates] = useState<DailyUpdate[]>([]);

  const modal = useModalContext();

  useEffect(() => {
    const getLatestStatus = async () => {
      try {
        const response = await getDailyUpdate(2);

        setUpdates(response);

        if (!response[0].id) modal.openModal(<DailyUpdateForm />);
      } catch (error) {
        console.warn(error);
      }
    };

    getLatestStatus();
  }, [modal]);

  return (
    <div className="w-full my-5">
      <div className="grid grid-cols-2 gap-10">
        <div className="shadow rounded w-full p-5 bg-gray">
          <h3 className="text-xl font-bold">Twój dzisiejszy update</h3>
          <p className="text-l">{updates[0] ? updates[0].note : null}</p>
        </div>
        <div className="shadow rounded w-full p-5 bg-gray">
          {updates.length ? (
            <Line ref={ref} data={extractRatingsWithDays(updates)} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
