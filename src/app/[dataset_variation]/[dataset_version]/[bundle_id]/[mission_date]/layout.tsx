import { Button } from "@mui/joy";
import Link from "next/link";
import { FC } from "react";
interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = (props) => {
  return (
    <html lang="en">
      <body>
        <div className="h-screen w-screen overflow-hidden">
          <div className="flex h-24 bg-indigo-500  '">
            <div className="self-center ml-10 ">
              <Button className="bg-white text-indigo-500 hover:outline-8 hover:outline-indigo-900  hover:text-indigo-900 hover:font-bold hover:bg-white">
                <Link href={"/"}>Go Back To File Browse</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-scroll h-full w-full ">{props.children}</div>
        </div>
      </body>
    </html>
  );
};
export default Layout;
