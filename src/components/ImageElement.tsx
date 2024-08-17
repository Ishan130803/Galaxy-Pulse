"use client";
import { useOpenImageAnalysisContext } from "@/hooks/OpenImageAnalysisContext";
import { IBundleMetaData, IClassValue, Iget_sample_image_url } from "@/types/types";
import { get_class_labels } from "@/utils/localtunnelServer";
import { Box } from "@mui/joy";
import {
  HTMLAttributes,
  MouseEvent as ME,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

type ImageElementPageProps = {
  url1: string;
  url2: string;
} & IBundleMetaData;

function ImageElementPage(props: ImageElementPageProps) {
  const {
    url1,
    url2,
    bundle_id,
    dataset_variation,
    dataset_version,
    mission_date,
  } = props;
  
  const {setcurrent_click_x,setcurrent_click_y} = useOpenImageAnalysisContext()


  // Ref for the div element
  const divRef = useRef<HTMLImageElement>(null as any);

  // Event handler for mouse movement
  const handleMouseMove = (event: ME<HTMLImageElement, MouseEvent>) => {
    if (divRef.current) {
      // Get the bounding rectangle of the div
      const rect = divRef.current.getBoundingClientRect();

      // Calculate mouse position relative to the div
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const div_width = rect.width;
      const div_height = rect.height;
      const x = Math.floor((mouseX / div_width) * props.image_width)
      const y = Math.floor((mouseY / div_height) * props.image_height)
      setcurrent_click_x(x)
      setcurrent_click_y(y)
    }
  };


  return (
    <>
      <Box className="backdrop-blur-xl box-border basis-1/2 w-fit grow border-2 m-10 mr-5 border-double border-white rounded-3xl p-2  overflow-scroll overflow-y-scroll overflow-x-hidden scroll-smooth ">
        <div className="flex">
          <img
            className=" m-2 rounded-xl basis-1/2"
            src={url1}
            // src = 'https://galaxypulse.loca.lt/image'

            alt="Image"
          />
          <img
            className=" m-2 rounded-xl basis-1/2"
            src={url2}
            onClick={handleMouseMove}
            ref={divRef}
            // src = 'https://galaxypulse.loca.lt/image'

            alt="Image"
          />
        </div>
      </Box>
    </>
  );
}

export default ImageElementPage;
