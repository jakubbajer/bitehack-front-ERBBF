import { getPastCheerups } from "./../../api/cheer-up";
import React from "react";
import { useQuery } from "react-query";
import { useUserContext } from "./../../hooks/useUserContext";
import { getDailyUpdate } from "./../../api/daily-update";

interface CheerupInterface {
    id: number; 
    receiverId: number;
    senderId: number;
    timestamp: number;
    updateId: number;
    content: string;
}

export const PastCheerups = () => {
  const {
    data: { userId },
  } = useUserContext();

  const { data, isLoading } = useQuery({
    queryKey: ["past-cheerups"],
    queryFn: () => getPastCheerups(userId),
  });

  const { updatesData, isLoadingUpdates } = useQuery({
    queryKey: ["updates"],
    queryFn: () => getDailyUpdate(userId),
  });
  if (isLoadingUpdates) return "Loading updates...";
  if (isLoading) return "Loading...";

  return <div>
        <h2 className="font-bold text-3xl">Co napisali Ci inni</h2>
        <div className="flex flex-col">
        {data.map((cheerup : CheerupInterface) => {
            const date = new Date(cheerup.timestamp);
            
            return (
                <div className="bg-gray p-4 rounded shadow mb-3">
                    <p className="font-bold">
                        {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
                    </p>
                    <p>{cheerup.content}</p>
                </div>
            );
        })}
    </div>
  </div>;
};
