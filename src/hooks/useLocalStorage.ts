import { useEffect, useState } from "react";

export const useLocalStorage = <T extends boolean | string | number | null>(
  key: string,
  initial: T
) => {
  const storedValue = window.localStorage.getItem(key);
  const [value, setValue] = useState(
    storedValue !== null ? storedValue : initial
  );

  useEffect(() => {
    window.localStorage.setItem(key, `${value}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    setValue(storedValue !== null ? storedValue : initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [value, setValue];
};
