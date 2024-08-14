import { Iget_sample_image_url, ISpectrumResponseData } from "@/types/types";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import * as React from "react";
import { Grid } from "@mui/material";

type IAnalyticsComponentProps = {
  spectrum_data: ISpectrumResponseData[];
} & Iget_sample_image_url;

const AnalyticsComponent: React.FunctionComponent<IAnalyticsComponentProps> = (
  props
) => {
  return (
    <>
      {/* <div>
        {props.spectrum_data.map((v) => {
          return (
            <Accordion className="font-mono">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <div className="flex w-full ">
                  <div className="">{v.spectrum_name}</div>
                  <div className="grow"></div>
                  <div
                    className="shrink-0 h-4 w-4 self-center"
                    style={{
                      backgroundColor: `rgb(${v.color_code[0]},${v.color_code[1]},${v.color_code[2]})`,
                    }}
                  ></div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <img src={v.image_url} alt="Spectrum Image" />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div> */}
    </>
  );
};

export default AnalyticsComponent;
