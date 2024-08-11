import { Button } from "@mui/joy";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black background-image-putter  flex flex-col flex-none h-screen w-screen">
      <div className="flex justify-center h-24 ">
        <div className="fixed justify-self-start self-center ml-10 left-0">
          <Button className="box-border w-fit px-4 border-2 border-white  text-white font-mono">
            <Link href={"/file_browse"}>Go Back To File Browse</Link>
          </Button>
        </div>
        <div className="self-center justify-center text-white font-mono text-6xl ">
          {"Lunar Geology Analyzer"}
        </div>
      </div>
      <div className="overflow-scroll w-full grow flex flex-col">
        {children}
      </div>
    </div>
  );
}
