import { api } from ".";

export type Habit = {
  broken: boolean;
  habitId: number;
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

export const breakStreak = (habitId: number) => api(`/habits`, {
  method: 'PUT',
  body: JSON.stringify({
    id: habitId,
    broken: true
  }),
  headers: { "content-type": "application/json" },
})

export const createHabit = (habitId: number, userId: number) => api(`/habits`, {
  method: 'POST',
  body: JSON.stringify({
    habitId,
    userId
  }),
  headers: { "content-type": "application/json" },
})
