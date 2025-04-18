import WorkspaceSidebar from "@/components/Sidebar/WorkspaceSidebar";

export default function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="md:flex h-screen">
      <WorkspaceSidebar />
      {children}
    </main>
  );
}
