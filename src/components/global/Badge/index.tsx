import React from "react";
import clsx from "clsx";

type Variant = "default" | "rating";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  icon?: React.ReactNode;
}

const Badge = ({
  children,
  className,
  variant = "default",
  icon
}: BadgeProps) => {
  const base = "inline-flex items-center rounded-full";

  const variants = {
    default:
      "px-3 py-0.5 text-xs font-medium bg-white/10 backdrop-blur-xs border border-white/20 text-white",

    rating: "px-3 py-1 text-sm font-bold bg-yellow-400 text-black"
  };

  return (
    <span className={clsx(base, variants[variant], className)}>
      {icon && <span className="flex items-center mr-1.5">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
