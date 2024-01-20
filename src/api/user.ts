import { api } from ".";

type LoginUserReturn = {
  data: {
    id: number;
    user: string;
  };
  loggedIn: boolean;
};

export const loginUser = (
  user: string,
  password: string
): Promise<LoginUserReturn> =>
  api("/login", {
    method: "POST",
    body: JSON.stringify({ user, password }),
    headers: { "content-type": "application/json" },
  });

type RegisterUserReturn = {
  data: {
    id: number;
    user: string;
  };
  loggedIn: boolean;
};

export const registerUser = (
  user: string,
  password: string
): Promise<RegisterUserReturn> =>
  api("/register", {
    method: "POST",
    body: JSON.stringify({ user, password }),
    headers: { "content-type": "application/json" },
  });
