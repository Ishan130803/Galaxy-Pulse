
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="bg-black background-image-putter h-screen w-screen overflow-hidden ">
          <div className="flex justify-center h-24 ">
              <div className="self-center justify-center text-white font-mono text-6xl ">
                {"Lunar Explorer"}
              </div>
          </div>
          <div className="overflow-scroll w-full h-full flex flex-col flex-none">{children}</div>
        </div>
  );
}
