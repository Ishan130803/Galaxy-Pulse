import { Button } from "@mui/joy";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black flex flex-col background-image-putter h-screen w-screen">
      <div className="flex flex-none justify-center h-24 ">
        <div className="fixed justify-self-start self-center ml-10 left-0">
          <Button className="box-border w-fit px-4 border-2 border-white  text-white font-mono">
            <Link href={"/"}>Home</Link>
          </Button>
        </div>
        <div className="self-center justify-center text-white font-mono text-6xl ">
          {"Lunar Explorer"}
        </div>
      </div>
      <div className="w-full grow flex flex-col flex-none overflow-scoll">
        {children}
      </div>
      <div className="shrink-0"></div>
    </div>
  );
}
