import React from "react";
import AccountInfo from "./AccountInfo/AccountInfo";
import Features from "./Features/Features";
import PreviewMode from "./PreviewMode/PreviewMode";

const BuilderHeader = () => {
  return (
    <section className="flex max-md:flex-col justify-between items-center gap-10">
      <AccountInfo />
      <Features />
      <PreviewMode />
    </section>
  );
};

export default BuilderHeader;
