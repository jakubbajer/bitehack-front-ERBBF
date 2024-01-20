import { api } from ".";

export type Habit = {
  broken: boolean;
  habitId: 1 | 3 | 5;
  id: number;
  timestamp: number;
  timestampBroken: number | null;
  userId: number;
};

type GetHabitsReturn = {
  data: Habit[];
  habitSuccess: boolean;
};

export const getHabits = (userId: number): Promise<GetHabitsReturn> =>
  api(`/habits/${userId}`, {
    method: "GET",
  });
