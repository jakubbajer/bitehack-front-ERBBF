import { useState } from "react";
import { Habit } from "../../api/habits";
import { Button } from "../Button";
import { ProgressCircle } from "./ProgressCircle";

const HABIT_NAMES = {
  1: "Alkohol",
  3: "Papierosy",
  5: "League of Legends",
};

export const HabitCard = ({ habit }: { habit: Habit }) => {
  const [counter, setCounter] = useState(Math.round(Math.random() * 365));
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  return (
    <div className="bg-background shadow-md rounded-lg flex-auto py-8 px-12 max-w-80 flex flex-col items-center">
      <h3 className="text-xl font-bold text-center">
        {HABIT_NAMES[habit.habitId]}
      </h3>
      <div className="max-w-40 flex justify-center items-center">
        <ProgressCircle
          progress={Math.round((counter / 365) * 100)}
          width={144}
        />
      </div>
      <div className="my-4 text-center">
        To Twój <span className="font-bold text-accent">{counter}</span> dzień
        bez tego nawyku z rzędu!
      </div>
      <Button
        kind="accent"
        handleClick={() => {
          setCounter(counter + 1);
          setIsButtonDisabled(true);
        }}
        disabled={isButtonDisabled}
        className="shadow-md"
      >
        Dzień bez nawyku
      </Button>
    </div>
  );
};
