import { getPastCheerups } from "./../../api/cheer-up";
import React from "react";
import { useQuery } from "react-query";
import { useUserContext } from "./../../hooks/useUserContext";
import { getDailyUpdate } from "./../../api/daily-update";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface CheerupInterface {
    id: number; 
    receiverId: number;
    senderId: number;
    timestamp: number;
    updateId: number;
    content: string;
}

const getSpecificUpdate = (updateId: number, updates: []) => {
    return updates.filter((item: {id: number}) => item.id == updateId);
}

const getDateTime = (timestamp: number): string => {
    const date = new Date(timestamp);

    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}.${date.getMinutes()}`;
}

export const PastCheerups = () => {
  const {
    data: { userId },
  } = useUserContext();

  const { data, isLoading } = useQuery({
    queryKey: ["past-cheerups"],
    queryFn: () => getPastCheerups(userId),
  });

  const { data: updatesData, isLoading: isLoadingUpdates } = useQuery({
    queryKey: ["updates-for-cheerups"],
    queryFn: () => getDailyUpdate(userId),
  });

  if (isLoadingUpdates) return "Loading updates...";
  if (isLoading) return "Loading...";

  return <div className="my-10">
        <h2 className="font-bold text-3xl mb-5">Co napisali Ci inni</h2>
        <div className="flex columns-3 g-10 items-stretch">
        {data.map((cheerup : CheerupInterface) => {
            const relatedUpdate = getSpecificUpdate(cheerup.updateId, updatesData)[0];

            return (
                <div className="w-1/3 px-3">
                    <div className="flex h-full flex-col items-center shadow rounded overflow-hidden">
                        <div className="flex items-center w-full bg-primary text-white p-3">
                            <FontAwesomeIcon icon={faUser}/> <b class="ms-3">Anonim</b>
                        </div>
                        { relatedUpdate ? <p className=" text-sm my-3">{getDateTime(relatedUpdate.timestamp)}</p> : null }
                        { relatedUpdate ? <div className="self-end max-w-[75%] m-3 bg-primary text-white rounded p-2">{relatedUpdate.note}</div> : null }
                        <p className=" text-sm my-3">{getDateTime(cheerup.timestamp)}</p>
                        <p className="self-start max-w-[75%] m-3 bg-gray rounded p-2">{cheerup.content}</p>
                    </div>
                </div>
            );
        })}
    </div>
  </div>;
};
