import { faUser, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { getRandomDailyUpdate } from "./../../api/daily-update";

export const CheerUp = () => {
  useEffect(() => {
    const getRandomUpdate = async () => {
      const result = await getRandomDailyUpdate();
    };

    getRandomUpdate();
  }, []);

  return (
    <div className="shadow rounded w-full p-5 bg-gray my-5">
      <h3 className="text-xl font-bold">Wspieraj innych!</h3>
      <div>
        <FontAwesomeIcon icon={faUserAlt} />{" "}
        <span className="text-primary ms-3">Anonim</span>
      </div>
    </div>
  );
};
