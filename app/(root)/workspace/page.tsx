import Image from "next/image";
import Link from "next/link";

export default function Workspace() {
  return (
    <div className="md:w-3/4 md:px-12 py-6 px-4">
      <Link
        href="builder/new"
        className="w-full flex items-center justify-between px-6 md:px-10 py-4 border-2 border-dotted rounded-lg hover:scale-105 transition duration-400 text-sm"
      >
        <span>Create a new form</span>
        <Image src="/icons/plus.svg" alt="plus" width={24} height={24} />
      </Link>
    </div>
  );
}
