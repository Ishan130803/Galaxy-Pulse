import AnalyticsComponent from "@/components/AnalyticsComponent";
import { BundleListComponent } from "@/components/BundleListComponent";
import ImageElementPage from "@/components/ImageElement";
import { OpenImageAnalysisContextContextProvider } from "@/hooks/OpenImageAnalysisContext";
import {
  get_bundle_meta_data,
  get_kmeans_image_url,
  get_sample_image_url,
} from "@/utils/localtunnelServer";
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
  const sample_image_url = await get_sample_image_url({ ...params });
  const kmeans_image_url = await get_kmeans_image_url({ ...params });
  const metadata = await get_bundle_meta_data({...params})
  
  return (
    <>
      <OpenImageAnalysisContextContextProvider>
        <div className="flex h-full">
          <ImageElementPage
            url1={sample_image_url}
            url2={kmeans_image_url}
            {...metadata}
          ></ImageElementPage>
          <div className="backdrop-blur-xl text-white font-mono p-4 border-2 m-10 border-double ml-5 border-white rounded-3xl basis-1/2 overflow-scroll scroll-smooth ">
            <AnalyticsComponent
              {...metadata}
            ></AnalyticsComponent>
          </div>
        </div>
      </OpenImageAnalysisContextContextProvider>
    </>
  );
};

export default Page;
