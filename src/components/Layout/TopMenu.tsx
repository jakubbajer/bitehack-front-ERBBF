import { Link } from "react-router-dom";
import { Button } from "../Button";
import { LoginForm } from "../LoginForm";
import { RegisterForm } from "../RegisterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useModalContext } from "../Modal/ModalContext";
import { useState } from "react";
import { useUserContext } from "../../hooks/useUserContext";

export const TopMenu = () => {
  const {
    data: { loggedIn },
    handleUserLogout,
  } = useUserContext();
  const { openModal } = useModalContext();
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const menuClasses: string = `w-full md:block md:w-auto`;

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="font-bold text-l text-primary flex items-center space-x-3 rtl:space-x-reverse"
        >
          ADIFREE
        </Link>
        <button
          onClick={() => setIsMenuToggled(!isMenuToggled)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={isMenuToggled ? `${menuClasses}` : `hidden ${menuClasses}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                  to="/przydatne-strony"
                  className="block py-2 px-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-bold"
              >
                Przydatne strony
              </Link>
            </li>
            <li>
              <Link
                to="/artykuly"
                className="block py-2 px-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-bold"
              >
                Artykuły
              </Link>
            </li>
            {!loggedIn ? (
              <>
                <li>
                  <Button
                  className="text-primary"
                    kind="text"
                    handleClick={() => {
                      openModal(<LoginForm />);
                    }}
                  >
                    Zaloguj się
                  </Button>
                </li>
                <li>
                  <Button
                    className="text-primary"
                    kind="text"
                    handleClick={() => {
                      openModal(<RegisterForm />);
                    }}
                  >
                    Zarejestruj się
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li className="text-primary">
                  <Button
                    kind="text"
                    className="text-primary"
                    handleClick={() => {
                      handleUserLogout();
                    }}
                  >
                    Wyloguj się
                  </Button>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="block py-2 px-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
