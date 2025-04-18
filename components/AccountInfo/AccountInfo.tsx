"use client";

import Image from "next/image";
import React, { useState } from "react";

const AccountInfo = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAdminPanel = () => {
    setShowDropdown(false);
  };

  const handleLogout = () => {
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <Image
        src="/images/account-placeholder.png"
        alt="account"
        width={36}
        height={36}
        onClick={() => setShowDropdown(!showDropdown)}
        className="cursor-pointer"
      />
      {showDropdown && (
        <ul className="z-50 bg-white w-24 md:w-36 p-2 absolute right-0 mt-2 rounded text-xs max-md:text-[16px] shadow">
          <li className="border-b-2 p-2 border-gray-200">
            Hello, <b>username</b>
          </li>
          <li
            className="border-b-2 p-2 border-gray-200 cursor-pointer flex justify-between hover:bg-gray-100"
            onClick={handleAdminPanel}
          >
            Admin Panel
            <Image
              src="/icons/goto.svg"
              alt="goto"
              width={20}
              height={20}
            />
          </li>
          <li
            className="border-b-2 p-2 border-gray-200 cursor-pointer flex justify-between hover:bg-gray-100"
            onClick={handleLogout}
          >
            Logout
            <Image
              src="/icons/logout.svg"
              alt="logout"
              width={20}
              height={20}
            />
          </li>
        </ul>
      )}
    </div>
  );
};

export default AccountInfo;
