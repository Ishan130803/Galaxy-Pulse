"use client";
import { useOpenImageAnalysisContext } from "@/hooks/OpenImageAnalysisContext";
import { IClassValue, Iget_sample_image_url } from "@/types/types";
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
} & Iget_sample_image_url;

function ImageElementPage(props: ImageElementPageProps) {
  const {
    url1,
    url2,
    bundle_id,
    dataset_variation,
    dataset_version,
    mission_date,
  } = props;
  const [mousePosition, setMousePosition] = useState({
    mouse_x: 0,
    mouse_y: 0,
    div_width: 1,
    div_height: 1,
  });
  const [classValue, setClassValue] = useState<"Loading..." | IClassValue>(
    "Loading..."
  );

  // Ref for the div element
  const divRef = useRef<HTMLImageElement>(null as any);
  const { setimage_params, setcurrent_click_x, setcurrent_click_y } = useOpenImageAnalysisContext()

  // Event handler for mouse movement
  const handleMouseMove = (event: ME<HTMLImageElement, MouseEvent>) => {
    setimage_params({
      bundle_id : bundle_id,
      dataset_variation : dataset_variation,
      mission_date : mission_date,
      dataset_version : dataset_version
    })

    if (divRef.current) {
      // Get the bounding rectangle of the div
      const rect = divRef.current.getBoundingClientRect();

      // Calculate mouse position relative to the div
      const scrollLeft = divRef.current.scrollLeft;
      const scrollTop = divRef.current.scrollTop;
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const div_width = rect.width;
      const div_height = rect.height;

      // Update state with new coordinates
      setMousePosition({
        mouse_x: mouseX,
        mouse_y: mouseY,
        div_height: div_height,
        div_width: div_width,
      });
      setcurrent_click_x(mouseX)
      setcurrent_click_y(mouseY)
      console.log(mousePosition);
    }
  };

  useEffect(() => {
    const fetch_value = async () => {
      const value: IClassValue = await get_class_labels({
        dataset_variation,
        dataset_version,
        bundle_id,
        mission_date,
        ...mousePosition,
      });
      setClassValue(value);
    };
    fetch_value();
  }, 
  [mousePosition.mouse_x]);

  return (
    <>
      <div className="fixed bottom-10 mx-auto justify-self-center bg-white font-mono text-xl font-bold z-50">
        {`x : ${mousePosition.mouse_x} y : ${
          mousePosition.mouse_y
        } class_label : ${
          classValue === "Loading..." ? classValue : classValue.label
        }`}
      </div>
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
