"use client";

import { IBundleMetaData } from "@/types/types";
import { get_click_spectrum_image_link } from "@/utils/localtunnelServer";
import { useEffect, useState } from "react";

type HookUtilsProps = {} & IBundleMetaData & {
    x: number;
    y: number;
    process_method: string;
    dependencies : any[]
  };

function usePointPlotImageUrl({ ...props }: HookUtilsProps) {
  const [url, setUrl] = useState("/");
  useEffect(() => {
    get_click_spectrum_image_link({
      ...props,
    }).then((data) => setUrl(data));
  }, [...props.dependencies]);
  return {url, setUrl}

}
export { usePointPlotImageUrl };
