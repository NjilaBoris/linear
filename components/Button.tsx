import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-lime-400 text-neutral-950 border-lime-400",
  secondary: "border-white bg-transparent text-white",
};
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,

  ...rest
}) => {
  return (
    <button
      className={clsx(
        " border h-12 rounded-full px-6 font-medium",
        variantClasses[variant],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
