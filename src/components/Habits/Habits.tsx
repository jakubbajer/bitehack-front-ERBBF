import { useUserContext } from "../../hooks/useUserContext";
import { getHabits } from "../../api/habits";
import { useQuery } from "react-query";
import { HabitCard } from "./HabitCard";

export const Habits = () => {
  const {
    data: { userId },
  } = useUserContext();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["habits"],
    queryFn: () => getHabits(2),
  });

  if (!data || isLoading) {
    return "...";
  }

  if (isError) {
    console.error(error);
    return <></>;
  }

  return (
    <div className="flex flex-col my-16">
      <h2 className="text-2xl mb-4 text-center font-bold">Twoje nawyki</h2>
      <div className="flex gap-4 justify-between">
        {data.data.map((habit) => (
          <HabitCard habit={habit} />
        ))}
      </div>
    </div>
  );
};
