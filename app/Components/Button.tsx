import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface iButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  icon?: ReactNode;
}
const Button: FC<iButton> = ({ className, icon, children, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "rounded-md bg-neutral-700 text-white flex items-center px-7 py-3 font-bold", className
      )}
    >
        <div className={`${icon ? "mr-2" : ""}`}>{icon}</div>
        <div>{children}</div>
    </button>
  );
};

export default Button;
