import clsx from "clsx";
import React, { HTMLAttributes } from "react";

const Key = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      className={clsx(
        "size-14 bg-neutral-300 inline-flex font-medium items-center justify-center rounded-2xl text-xl text-neutral-950",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Key;
