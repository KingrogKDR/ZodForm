import BuilderSidebar from "@/components/Sidebar/BuilderSidebar";

export default function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="md:flex h-screen">
      <BuilderSidebar />
      {children}
    </main>
  );
}
