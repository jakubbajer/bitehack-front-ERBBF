import { Button } from "../Button";

export const LoginForm = () => {
  return (
    <div className="flex-col">
      <h2 className="text-3xl font-bold text-center mb-4">Zaloguj się</h2>
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
            className="p-2 rounded border-secondary border-solid border-2"
          />
        </div>
        <div className="flex justify-end mb-8">
          <Button
            kind="secondary"
            handleClick={(e) => {
              e.preventDefault();
            }}
          >
            Zaloguj się
          </Button>
        </div>
      </form>
      <div className="flex flex-col items-center">
        <div>Nie masz konta?</div>
        <Button kind="text" handleClick={() => {}}>
          Zarejestruj się tutaj
        </Button>
      </div>
    </div>
  );
};
