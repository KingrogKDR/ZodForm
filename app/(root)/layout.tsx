"use client";

import BuilderHeader from "@/components/BuilderHeader";
import Header from "@/components/Header/Header";
import WorkspaceHeader from "@/components/WorkspaceHeader";
import { usePathname } from "next/navigation";

export default function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <main>
      {pathname === "/workspace" && <Header element={<WorkspaceHeader />} />}
      {pathname === "/builder" && <Header element={<BuilderHeader />} />}
      {children}
    </main>
  );
}
