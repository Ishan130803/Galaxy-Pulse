
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="h-screen w-screen overflow-hidden">
          <div className="flex justify-center h-24 bg-indigo-500">
              <div className="self-center text-white font-mono text-3xl ">
                Welcome To Galaxy Pulse
              </div>
          </div>
          <div className="overflow-scroll h-full w-full ">{children}</div>
        </div>
  );
}
