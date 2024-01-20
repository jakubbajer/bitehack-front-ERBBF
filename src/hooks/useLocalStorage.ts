import { SetStateAction, useEffect, useState } from "react";

export const useLocalStorage = <T extends string | number | boolean | null>(
  key: string,
  initial: T
): [T, React.Dispatch<SetStateAction<T>>] => {
  const rawValue = window.localStorage.getItem(key);
  const storedValue = rawValue !== null ? (JSON.parse(rawValue) as T) : null;
  const [value, setValue] = useState(
    storedValue !== null ? storedValue : initial
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    setValue(storedValue !== null ? storedValue : initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [value, setValue];
};
