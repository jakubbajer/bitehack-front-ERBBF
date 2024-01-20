import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Button } from '../Button';
import { getRandomDailyUpdate } from './../../api/daily-update';
import { createCheerup } from './../../api/cheer-up';
import { useUserContext } from './../../hooks/useUserContext';
import { useLocalStorage } from './../../hooks/useLocalStorage';

interface ToBeCheered {
    id: number
    isCheered: boolean
    note: string 
    rating: number 
    timestamp: number
    userId: number
}

export const CheerUp = () => {
  const { data: { userId } } = useUserContext();
  const [ userAlreadyCheered, setUserAlreadyCheered] = useLocalStorage<Date|null>("userCheeredSomeone", null);


  const [toBeCheered, setToBeCheered] = useState<ToBeCheered>({
    id: 0,
    isCheered: false,
    note: '',
    rating: 0,
    timestamp: 0,
    userId: 0
  });


  const [note, setNote] = useState('');

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

  const sendUpdate = async () => {
    try {
        await createCheerup(toBeCheered.id, toBeCheered.userId, userId as number, note);
        setUserAlreadyCheered(new Date());
    } catch (error) {
        console.error(error);
    }
  }

  const canSendCheer = () => {
    return note.length > 20;
  }
  if (toBeCheered.id == 0) return null;
  if ((userAlreadyCheered != null && new Date(userAlreadyCheered)).getDate() == (new Date()).getDate()) return null;

  return (
    <div className="shadow rounded w-full p-5 bg-gray my-5">
        <h3 className="text-xl font-bold">Wspieraj innych!</h3>
        <div>
            <FontAwesomeIcon icon={faUserAlt} /> <span className="text-primary ms-3">Anonim - ocena samopoczucia: {toBeCheered.rating}</span>
            <p className="italic text-variant">
                {toBeCheered.note}
            </p>
            <p>Minimalna długość wiadomości {note.length}/20</p>

            <textarea onInput={(e) => setNote(e.target.value)} placeholder="Napisz słowa wsparcia jeśli chcesz, udzielając się w społeczności zaczniesz otrzymywać pozytywne wiadomości." className="w-full text-l border-none bg-white p-3 rounded resize-none h-[150px] mt-3"></textarea>
            { canSendCheer() ? <Button kind="primary" handleClick={() => sendUpdate()} children={<p>Wyślij</p>}/> : null}
        </div>
    </div>
  );
};
