import { IntegrationsType } from "@/app/sections/Integrations";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const IntegrationsColumn = (props: {
  integrations: IntegrationsType;
  className?: string;
}) => {
  const { integrations, className } = props;
  return (
    <div className={clsx("flex flex-col gap-4 pb-4", className)}>
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="bg-neutral-900 border-white/10 rounded-3xl p-6"
        >
          <div className="flex justify-center">
            <Image
              src={integration.icon}
              alt={integration.name}
              className="size-18"
            />
          </div>
          <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
          <p className="text-center text-white/50 mt-2">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IntegrationsColumn;
