import clsx from "clsx";
import React, { HTMLAttributes } from "react";

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={clsx(
        "inline-flex border uppercase border-lime-400 gap-2 items-center text-lime-400 px-3 py-1 rounded-full",
        className
      )}
      {...otherProps}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
};

export default Tag;
