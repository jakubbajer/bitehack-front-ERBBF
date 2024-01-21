import { useUserContext } from "../../hooks/useUserContext";
import { getHabits } from "../../api/habits";
import { useQuery, useQueryClient } from "react-query";
import { HabitCard } from "./HabitCard";
import { useRef } from "react";
import { Button } from "../Button";
import { createHabit } from './../../api/habits'

export const HABIT_NAMES = {
  1: "Alkohol",
  3: "Papierosy",
  5: "League of Legends",
  2: "Prokrastynacja",
  4: "Social Media"
};

export const HABIT_COSTS = {
  1: {type: 'money', amount: 20},
  2: {type: 'time', amount: 1},
  3: {type: 'money', amount: 15},
  4: {type: 'time', amount: 3},
  5: {type: 'time', amount: 4}
}

export const Habits = () => {
  const selectRef = useRef();
  const queryClient = useQueryClient();
  
  const {
    data: { userId },
  } = useUserContext();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["habits"],
    queryFn: () => getHabits(userId),
  });

  if (!data || isLoading) {
    return "...";
  }

  if (isError) {
    console.error(error);
    return <></>;
  }

  const handleAdd = async () => {
    const type = selectRef.current.value;
    if (!type) return;

    try {
      const result = await createHabit(type, userId);
      queryClient.invalidateQueries('habits');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="my-10">
        <h2 className="text-2xl mb-4 text-center font-bold">Twoje nawyki</h2>
        <div className="flex">
          <select className="bg-gray p-4 rounded shadow w-full" ref={selectRef}>
            <option value="0">Wybierz</option>
            {Object.keys(HABIT_NAMES).map((key:number) => <option value={key}>{HABIT_NAMES[key]}</option>)}
          </select>
          <Button className="ms-5" kind="primary" handleClick={handleAdd} children={"Dodaj nowy licznik"}></Button>
        </div>
      </div>
      <div className="flex flex-col my-16">
        <div className="flex columns-3 gap-4 justify-between">
          {data.data.map((habit) => (
            <HabitCard habit={habit} />
          ))}
        </div>
      </div>
    </>
  );
};
