import React from "react";
import type { MovieDetailsCard } from "../../types/types";

const DetailsCard: React.FC<MovieDetailsCard> = ({
  bg,
  title,
  icon: Icon,
  items,
  color,
}) => {
  return (
    <div
      className={`p-5 rounded-xl shadow-md flex flex-col justify-start ${bg}`}
    >
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      {/* Content */}
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${Icon ? "gap-3" : ""}`}
          >
            <div className="text-xl">
              {Icon && <Icon className="w-5 h-5 text-white" />}
            </div>

            <div className="flex flex-col">
              <p className={`text-sm ${color}`}>{item.header}</p>
              <p className="font-semibold">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsCard;
