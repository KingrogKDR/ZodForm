import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = ({ element }: { element: React.ReactElement }) => {
  return (
    <nav className="md:px-10 px-4 max-md:py-10 py-8 flex max-sm:flex-col gap-y-5 justify-between items-center shadow">
      <Link className="flex justify-center items-center gap-2" href="/">
        <Image src="/images/logo.png" alt="logo" width={44} height={44} />
        <h1 className="text-2xl">ZodForm</h1>
      </Link>
      {element}
    </nav>
  );
};

export default Header;
