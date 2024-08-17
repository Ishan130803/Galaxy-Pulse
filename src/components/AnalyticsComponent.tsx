"use client";
import { IBundleMetaData, Iget_sample_image_url } from "@/types/types";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import * as React from "react";
import { Grid } from "@mui/material";
import { useOpenImageAnalysisContext } from "@/hooks/OpenImageAnalysisContext";
import { get_click_spectrum_image_link } from "@/utils/localtunnelServer";
import { usePointPlotImageUrl } from "@/hooks/HookUtils";
import { ClassLabelGrid } from "./LunarExplorerPage/ClassLabelGrid";

type IAnalyticsComponentProps = {} & IBundleMetaData &
  React.HTMLAttributes<HTMLDivElement>;

const AnalyticsComponent: React.FunctionComponent<IAnalyticsComponentProps> = (
  props
) => {
  const { current_click_x, current_click_y } = useOpenImageAnalysisContext();

  const { url } = usePointPlotImageUrl({
    ...props,
    x: current_click_x,
    y: current_click_y,
    process_method: "k_means",
    dependencies: [current_click_x, current_click_y],
  });

  return (
    <>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 gap-3 ">
          <h1 className="text-white row-start-1 row-span-1 col-span-full place-self-center text-2xl font-bold">
            Spectrum at the selected Pixel
          </h1>
          <img
            src={url}
            className="rounded-xl object-fill row-start-2 row-span-2 col-span-2"
            alt="Plot Image"
          />
          <div className="bg-orange-50 rounded-xl"></div>
          <div className="bg-orange-300 rounded-xl"></div>
          <div className="text-white row-span-1 col-start-1 col-span-full place-self-center text-2xl font-bold">
            Spectral Classes
          </div>
          <ClassLabelGrid
            {...{
              bundle_id: props.bundle_id,
              dataset_variation: props.dataset_variation,
              dataset_version: props.dataset_version,
              mission_date: props.mission_date,
            }}
          ></ClassLabelGrid>
        </div>
      </div>
    </>
  );
};

export default AnalyticsComponent;
