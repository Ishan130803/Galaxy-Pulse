import { Button } from "@mui/joy";
import Link from "next/link";
import '@/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="h-screen w-screen overflow-hidden background-image-putter">
          <div className="flex h-24 '">
            <div className="self-center ml-10 ">
              <Button className=" text-indigo-500 hover:outline-8 hover:outline-indigo-900  hover:text-indigo-900 hover:font-bold hover:bg-white">
                <Link href={"/"}>Go Back To File Browse</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-scroll h-full w-full flex-col flex-none">{children}</div>
        </div>
  );
};
