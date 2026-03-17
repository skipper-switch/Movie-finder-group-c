import React from "react";
import clsx from "clsx";

type Variant = "primary" | "glass" | "icon";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  leftIcon,
  children,
  className,
  ...props
}: ButtonProps) => {
  const base =
    "flex items-center justify-center gap-2 rounded-full font-semibold transition-all active:scale-95";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",

    glass:
      "bg-white/15 text-white border border-white/20 backdrop-blur-[6px] hover:bg-white/25",

    icon: "bg-white/15 text-white border border-white/20 backdrop-blur-[6px] hover:bg-white/25 p-0"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-6 py-3 text-base"
  };

  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  return (
    <button
      className={clsx(
        base,
        variant !== "icon" && sizes[size],
        variant === "icon" && iconSizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children}
    </button>
  );
};

export default Button;
