import React, { useState } from 'react'
import { Button } from "../Button";
import { useModalContext } from '../Modal/ModalContext';
import { sendUpdate } from './../../api/daily-update';

interface DailyUpdate {
    rating: number
    note: string
}

export const DailyUpdateForm = () => {
  const { closeModal } = useModalContext();

  const [ update, setUpdate ] = useState<DailyUpdate>({
    rating: 0,
    note: ''
  });

  const setRating = (rating : number) => {
    setUpdate({...update, rating: rating})
  }

  const setNote = (note: string) => {
    setUpdate({
        ...update,
        note: note
    })
  }

  const isButtonAvailable = () : boolean => {
    if (update.rating && update.note) {
        return true;
    } else {
        return false;
    }
  }

  const ratingClasses : string = 'p-3 cursor-pointer shadow rounded-[50%] w-10 h-10 flex items-center justify-center text-bold';

  const postUpdate = () => {
    sendUpdate(2, update.rating, update.note).then(() => {
        closeModal()
    });
  }

  return (
    <div className="w-full h-full flex flex-col justify-between">
        <h2 className="text-2xl text-left font-bold">Pora na dzisiejszy update! Jak samopoczucie?</h2>
        <div className="flex columns-5 my-5 justify-between">
            {[1,2,3,4,5].map((rating : number) => (
                <div className={rating == update.rating ? ` ${ratingClasses} bg-primary text-white` : `${ratingClasses} bg-white`} onClick={() => setRating(rating)}>{ rating }</div>
            ))}
        </div>
        <textarea onInput={(e) => setNote(e.target.value)} className="w-full text-xl border-none bg-white p-3 rounded resize-none h-[150px]" placeholder="Powiedz nam jak się czujesz, czy coś nie tak?"></textarea>
        <div className="flex justify-end mt-5 gap-3">
            { isButtonAvailable() ? <Button kind={'primary'} handleClick={() => postUpdate()} children={<p>Wyślij</p>} /> : null}
            <Button kind={'accent'} handleClick={() => closeModal()} children={<p>Nie dzisiaj</p>} />
        </div>
    </div>
  )
}
