import { useState } from "react";
import { registerUser } from "../../api";
import { Button } from "../Button";
import { LoginForm } from "../LoginForm";
import { useModalContext } from "../Modal/ModalContext";

export const RegisterForm = () => {
  const { openModal } = useModalContext();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    registerUser(user, password);
  };

  return (
    <div className="flex-col">
      <h2 className="text-3xl font-bold text-center mb-4">Zarejestruj się</h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label className="flex-col pr-4" htmlFor="login">
            Login
          </label>
          <input
            type="text"
            id="login"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="p-2 rounded border-secondary border-solid border-2"
          />
        </div>
        <div>
          <label className="flex-col pr-4" htmlFor="password">
            Hasło
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded border-secondary border-solid border-2"
          />
        </div>
        <div className="flex justify-end mb-8">
          <Button kind="secondary" handleClick={handleSubmit}>
            Zarejestruj się
          </Button>
        </div>
      </form>
      <div className="flex flex-col items-center">
        <div>Masz już konto?</div>
        <Button
          kind="text"
          handleClick={() => {
            openModal(<LoginForm />);
          }}
        >
          Zaloguj się tutaj
        </Button>
      </div>
    </div>
  );
};
