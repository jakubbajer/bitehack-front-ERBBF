import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  kind: "primary" | "secondary" | "accent" | "text";
  handleClick: MouseEventHandler;
  children: ReactNode;
};

export const Button = ({ kind, handleClick, children }: ButtonProps) => {
  const styles: Record<ButtonProps["kind"], string> = {
    primary: "bg-primary px-4 py-2 text-background font-bold rounded-md",
    secondary: "bg-secondary px-4 py-2 text-background font-bold rounded-md",
    accent: "bg-accent px-4 py-2 text-background font-bold rounded-md",
    text: "text-accent underline font-bold",
  };

  return (
    <button onClick={handleClick} className={styles[kind]}>
      {children}
    </button>
  );
};