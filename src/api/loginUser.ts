import { api } from ".";

export const loginUser = (user: string, password: string) =>
  api("/login", {
    method: "POST",
    body: JSON.stringify({ user, password }),
    headers: { "content-type": "application/json" },
  });
