import { builderHeaderFeatures } from "@/app/constants";
import React from "react";

const Features = () => {
  return (
    <div className="flex gap-6">
      {builderHeaderFeatures.map((feature, index) => (
        <button
          key={feature.value + index}
          className="relative inline-block no-underline before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-black before:ease-in-out before:transition-all before:duration-300 hover:before:w-full before:rounded-full"
        >
          {feature.label}
        </button>
      ))}
    </div>
  );
};

export default Features;
