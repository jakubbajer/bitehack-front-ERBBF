import { api } from ".";

export const loginUser = (user: string, password: string) =>
  api("/login", {
    method: "POST",
    body: JSON.stringify({ user, password }),
    headers: { "content-type": "application/json" },
  });

export const sendUpdate = (userId: number, rating: number, note: string) => api("/daily-updates", {
    method: "POST",
    body: JSON.stringify({userId, rating, note}),
    headers: { "content-type": "application/json" },
});

export const getDailyUpdate = (userId: number) => api(`/daily-updates/user/${userId}`, {method: "GET"});

export const getRandomDailyUpdate = () => api('/daily-updates/user', {method: "GET"}); 
