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
        <Box className=" overflow-y-scroll box-border w-fit h-full  pr-1 scroll-smooth ">
          <div className="flex">
            <img
              className="min-w-96 flex-shrink-0"
              src={await get_sample_image_url({ ...params })}
              // src = 'https://galaxypulse.loca.lt/image'

              alt="Image"
            />
            {/* <img
              className="min-w-96 flex-shrink-0"
              src={await get_sample_image_url({ ...params })}
              // src = 'https://galaxypulse.loca.lt/image'

              alt="Image"
            /> */}
          </div>
        </Box>
    </>
  );
};

export default Page;
