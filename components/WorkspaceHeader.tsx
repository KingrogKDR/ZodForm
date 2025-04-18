import React from "react";
import Filter from "./Filter/Filter";
import Search from "./Search/Search";
import AccountInfo from "./AccountInfo/AccountInfo";

const WorkspaceHeader = () => {
  return (
    <section className="flex justify-center items-center gap-2 md:gap-8">
      <Filter />
      <Search />
      <AccountInfo />
    </section>
  );
};

export default WorkspaceHeader;
