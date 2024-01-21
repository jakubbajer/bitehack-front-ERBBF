import { useEffect } from "react";
import { useState } from "react";
import { Habit } from "../../api/habits";
import { Button } from "../Button";
import { ProgressCircle } from "./ProgressCircle";
import { breakStreak } from './../../api/habits'
import { useQueryClient } from "react-query";
import { HABIT_NAMES, HABIT_COSTS } from "./Habits";


const calcDateParts = (timestamp) => {
  const timeDifference = (new Date()).getTime() - timestamp;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
  };
}

export const HabitCard = ({ habit }: { habit: Habit }) => {
  const queryClient = useQueryClient();

  const [date, setDate] = useState<object>({});

  useEffect(() => {
    const calcDate = (timestamp) => {
      const dateObj = calcDateParts(timestamp);
      setDate(dateObj);
    }

    const interval = setInterval(calcDate, 1000, habit.timestamp);
    
    return () => clearInterval(interval);
  }, [])

  const handleBreak = () => {
    try {
      breakStreak(habit.id);
      queryClient.invalidateQueries('habits');
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="bg-background shadow-md rounded-lg flex-auto py-8 px-12 max-w-80 flex flex-col items-center">
      { (date.days > 0 && HABIT_COSTS[habit.habitId]) ? 
      (
        <p>Zaoszczędziłeś {date.days * HABIT_COSTS[habit.habitId].amount} {HABIT_COSTS[habit.habitId].type == 'money' ? 'zł' : 'godzin'}</p>
      ) : null}
      <h3 className="text-xl font-bold text-center">
        {HABIT_NAMES[habit.habitId]}
      </h3>
      <div className="max-w-40 flex justify-center items-center">
        {date.days != null ? <ProgressCircle
          progress={Math.round((date.days / 365) * 100)}
          width={144}
        /> : null}
      </div>
      <div className="my-4">
        { date.days > 0 ? <h2 className="font-bold text-xl mb-3 text-center">To juz {date.days} dni</h2> : null }
        <div className="flex relative mb-3">
          <span className="ps-3 absolute top-[50%] translate-y-[-50%] text-white">Godzin: {date.hours}</span>
          <progress className="progress-bar" id="file" value={date.hours} max={24}></progress>
        </div>

        <div className="flex relative mb-3">
          <span className="ps-3 absolute top-[50%] translate-y-[-50%] text-white">Minut: {date.minutes}</span>
          <progress className="progress-bar" id="file" value={date.minutes} max={60}></progress>
        </div>

        <div className="flex relative mb-3">
          <span className="ps-3 absolute top-[50%] translate-y-[-50%] text-white">Sekund: {date.seconds}</span>
          <progress className="progress-bar rounded" id="file" value={date.seconds} max={60}></progress>
        </div>
      </div>
      <Button kind="text" handleClick={() => handleBreak()} children={'Przerwij'}></Button>
    </div>
  );
};
