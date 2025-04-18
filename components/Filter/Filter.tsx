"use client";

import { filterItems } from "@/app/constants";
import Image from "next/image";
import React, { useState } from "react";

const Filter = () => {
  const [filtertext, setFilterText] = useState("Creation Date");
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleDropdown = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const handleFilterText = (text: string) => {
    setFilterText(text);
  };

  return (
    <div className="relative">
      <button
        className="px-2 py-1 flex gap-2 items-center justify-center rounded cursor-pointer transition-all duration-300 hover:bg-gray-300 max-md:text-[16px] text-sm shadow"
        onClick={handleDropdown}
      >
        <Image src="/icons/filter.svg" alt="filter" width={24} height={24} />
        <span className="text-gray-700 truncate">{filtertext}</span>
        {toggleDropdown ? (
          <Image
            src="/icons/chevron-up.svg"
            alt="chevron-up"
            width={20}
            height={20}
          />
        ) : (
          <Image
            src="/icons/chevron-down.svg"
            alt="chevron-down"
            width={20}
            height={20}
          />
        )}
      </button>
      {toggleDropdown && (
        <ul className="z-50 bg-white absolute text-gray-700 w-full mt-2 rounded max-md:text-[16px] text-sm shadow p-2">
          {filterItems.map((item, index) => (
            <li
              key={item + index}
              className="border-b-2 p-2 border-gray-200 hover:bg-gray-100 rounded cursor-pointer truncate"
              onClick={() => handleFilterText(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
