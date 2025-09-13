import clsx from "clsx";
import React from "react";

const Pointer = (props: { name: string; color?: "red" | "blue" }) => {
  const { name, color } = props;
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mouse-pointer text-white size-4"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
        <path d="M13 13l6 6"></path>
      </svg>
      <div className="absolute top-full left-full">
        <div
          className={clsx(
            "inline-flex rounded-full px-2 rounded-tl-none font-bold text-sm bg-blue-500",
            color === "red" && "bg-red-500"
          )}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default Pointer;
