import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2",
          variant === "default"
            ? "bg-lime-500 text-black hover:bg-lime-600"
            : "border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800",
          "px-6 py-3 rounded-xl text-lg",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
