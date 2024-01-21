import { faChevronRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "../Button";
import { getRandomDailyUpdate } from "./../../api/daily-update";
import { createCheerup } from "./../../api/cheer-up";
import { useUserContext } from "./../../hooks/useUserContext";
import { useLocalStorage } from "./../../hooks/useLocalStorage";

export interface ToBeCheered {
  id: number;
  isCheered: boolean;
  note: string;
  rating: number;
  timestamp: number;
  userId: number;
}

export const CheerUp = ({ setCheered }: { setCheered: Dispatch<SetStateAction<boolean>> }) => {
  const {
    data: { userId },
  } = useUserContext();
  const [userAlreadyCheered, setUserAlreadyCheered] = useLocalStorage<Date | null>("userCheeredSomeone", null);

  const [toBeCheered, setToBeCheered] = useState<ToBeCheered>({
    id: 0,
    isCheered: false,
    note: "",
    rating: 0,
    timestamp: 0,
    userId: 0,
  });

  const [note, setNote] = useState("");

  useEffect(() => {
    const getRandomUpdate = async () => {
      try {
        const result = await getRandomDailyUpdate(userId);
        setToBeCheered(result);
      } catch (error) {
        console.error(error);
      }
    };

    getRandomUpdate();
  }, []);

  const sendUpdate = async () => {
    try {
      await createCheerup(toBeCheered.id, toBeCheered.userId, userId as number, note);
      setUserAlreadyCheered(new Date());
      setCheered(true);
    } catch (error) {
      console.error(error);
    }
  };

  const canSendCheer = () => {
    return note.length > 20;
  };

  if (toBeCheered.id == 0) return null;

  if (userAlreadyCheered != null) {
    if (new Date(userAlreadyCheered).getDate() == new Date().getDate()) return null;
  }

  return (
    <div className="bg-gray py-5">
      <div className="container mx-auto grid grid-cols-2 gap-10 w-full">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-left w-full">Chcesz pomóc? To świetnie!</h2>
          <p className="text-left w-full text-l mb-5">Ktoś potrzebuje twojej pomocy!</p>
          <img src="/help.png" />
        </div>
        <div className="w-100 flex flex-col items-center justify-center">
          <div className="rounded overflow-hidden bg-white flex flex-col w-full min-h-[350px]">
            <div className="flex items-center w-full bg-primary text-white p-3">
              <FontAwesomeIcon icon={faUser}/> <b class="ms-3">Anonim</b>
            </div>
            <div className="grow">
              <p className="self-start max-w-[75%] m-3 bg-gray rounded p-2">{toBeCheered.note}</p>
            </div>

            <div className="flex items-center">
              <input
                onInput={(e) => setNote(e.target.value)}
                placeholder="Twoje słowa wsparcia..."
                className="w-full text-l border-none bg-white p-3 rounded resize-none mt-3 outline-none"
              />
              {canSendCheer() ? <div className="w-10 h-10 rounded-[50%] cursor-pointer bg-primary flex justify-center items-center text-white"><FontAwesomeIcon icon={faChevronRight} /></div> : null}
            </div>
          </div>
          <p className="mt-5">Minimalna długość wiadomości to {note.length}/20.</p>
        </div>
      </div>
    </div>
  );
};
