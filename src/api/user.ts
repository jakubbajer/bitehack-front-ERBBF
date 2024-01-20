import { api } from ".";

export const loginUser = (user: string, password: string) =>
  api("/login", {
    method: "POST",
    body: JSON.stringify({ user, password }),
    headers: { "content-type": "application/json" },
  });

export const registerUser = (user: string, password: string) => {
  api("/register", {
    method: "POST",
    body: JSON.stringify({ user, password }),
    headers: { "content-type": "application/json" },
  });
};
