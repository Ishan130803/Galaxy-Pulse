import { get_sample_image_url } from "@/utils/localtunnelServer";
import { Box } from "@mui/joy";
import Image from "next/image";
import { FC } from "react";

type route_params = {
  dataset_variation: string;
  dataset_version: string;
  bundle_id: string;
  mission_date: string;
};
interface IPageProps {
  params: route_params;
}
const Page: FC<IPageProps> = async (props) => {
  const { params } = props;
  console.log(await get_sample_image_url({ ...params }));
  return (
    <>
      <div className="flex h-full">
        <Box className="backdrop-blur-xl box-border basis-1/2 w-fit grow border-2 m-10 mr-5 border-double border-white rounded-3xl p-2  overflow-scroll scroll-smooth ">
          <div className="flex">
            <img
              className="min-w-96 flex-shrink-0 object-cover rounded-xl"
              src={await get_sample_image_url({ ...params })}
              // src = 'https://galaxypulse.loca.lt/image'

              alt="Image"
            />
            <img
              className="min-w-96 flex-shrink-0"
              src={await get_sample_image_url({ ...params })}
              // src = 'https://galaxypulse.loca.lt/image'

              alt="Image"
            />
          </div>
        </Box>
        <div className="backdrop-blur-xl text-white font-mono p-4 border-2 m-10 border-double ml-5 border-white rounded-3xl basis-1/2 overflow-scroll scroll-smooth ">
          <h1>Some Crazy shit here</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            nostrum nam non quas vero voluptatibus expedita illo magnam,
            molestias minus eaque aliquid magni. Possimus facilis hic ipsa
            similique tempora! Cumque vitae laborum expedita natus?
          </span>
        </div>
      </div>
    </>
  );
};

export default Page;
