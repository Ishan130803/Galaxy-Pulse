"use client";

import { IBundleMetaData, Iget_sample_image_url } from "@/types/types";
import { get_class_spectrum_paths_url } from "@/utils/localtunnelServer";
import { HTMLAttributes, useEffect, useState } from "react";

type ClassLabelGridProps = {} & Iget_sample_image_url &
  HTMLAttributes<HTMLDivElement>;

function ClassLabelGrid({
  dataset_version,
  dataset_variation,
  bundle_id,
  mission_date,
}: ClassLabelGridProps) {
  const [paths, setPaths] = useState<string[]>([]);
  useEffect(() => {
    get_class_spectrum_paths_url({
      dataset_variation,
      dataset_version,
      bundle_id,
      mission_date,
    }).then((data) => {
      setPaths(data);
    });
  }, []);
  return (
    <>
      {paths.map((v, i) => {
        return <img key={i} src={v} />;
      })}
    </>
  );
}

export { ClassLabelGrid };
