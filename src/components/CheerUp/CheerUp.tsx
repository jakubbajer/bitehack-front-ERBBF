import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { getRandomDailyUpdate } from './../../api/daily-update';

interface ToBeCheered {
    id: number
    isCheered: boolean
    note: string 
    rating: number 
    timestamp: number
    userId: number
}

export const CheerUp = () => {
//   const [cheerNote, setCheerNote] = useState();
  const [toBeCheered, setToBeCheered] = useState({})

  useEffect(() => {
    const getRandomUpdate = async () => {
        try {
            const result = await getRandomDailyUpdate();
            setToBeCheered(result);
        } catch (error) {
            console.error(error);
        }
    };

    getRandomUpdate();
  }, []);

  return (
    <div className="shadow rounded w-full p-5 bg-gray my-5">
        <h3 className="text-xl font-bold">Wspieraj innych!</h3>
        <div>
            <FontAwesomeIcon icon={faUserAlt} /> <span className="text-primary ms-3">Anonim - ocena samopoczucia: {toBeCheered.rating}</span>
            <p className="italic text-variant">
                {toBeCheered.note}
            </p>

            <textarea placeholder="Napisz słowa wsparcia jeśli chcesz, udzielając się w społeczności zaczniesz otrzymywać pozytywne wiadomości." className="w-full text-l border-none bg-white p-3 rounded resize-none h-[150px] mt-3"></textarea>
        </div>
    </div>
  );
};
