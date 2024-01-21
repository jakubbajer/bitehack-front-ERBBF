import { Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router';
import { Button } from "../Button";
import { useModalContext } from '../Modal/ModalContext';
import { sendUpdate } from './../../api/daily-update';
import { useUserContext } from './../../hooks/useUserContext';

interface DailyUpdate {
    rating: number
    note: string
}

export const DailyUpdateForm = ({ setUpdated, setSuspiciousUpdate } : { setUpdated: Dispatch<SetStateAction<boolean>>, setSuspiciousUpdate: Dispatch<SetStateAction<boolean>>}) => {
  const { closeModal } = useModalContext();
  const { data: { userId } } = useUserContext();

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

  const ratingClasses : string = 'w-10 cursor-pointer';

  const postUpdate = () => {
    sendUpdate(userId, update.rating, update.note).then((res) => {
      if (res.suspiciousMessage) {
        setSuspiciousUpdate(true);
      }

      setUpdated(true);
      closeModal();
    });
  }

  return (
    <div className="w-full h-full flex flex-col justify-between">
        <h2 className="text-2xl text-left font-bold">Pora na dzisiejszy update! Jak samopoczucie?</h2>
        <div className="flex columns-5 my-5 justify-between ">
            {[1,2,3,4,5].map((rating : number) => (
                <div onClick={() => setRating(rating)}>
                  <img className={rating == update.rating ? `${ratingClasses} grayscale-0` : `${ratingClasses} grayscale-[0.9]`} src={`/${rating}.png`} />
                </div>
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
