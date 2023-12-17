export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col mt-40 gap-5">{children}</div>;
}
