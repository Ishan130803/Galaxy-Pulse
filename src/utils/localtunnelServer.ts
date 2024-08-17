"use server";

import {
  IBundleMetaData,
  IClassValue,
  IfileBrowseData,
  Iget_class_labels,
  Iget_sample_image_url,
} from "@/types/types";

class ServerError implements Error {
  name: string;
  message: string;
  constructor() {
    this.name = "ServerError";
    this.message = "Unable to receive Response from the server";
  }
}

export async function get_data_bundle_list(): Promise<IfileBrowseData[]> {
  const server_url = process.env.REMOTE_SERVER_URL;
  console.log(`${server_url}/api/v2/list-data`);
  const res = await fetch(`${server_url}/api/v2/list-data`);
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw new ServerError();
  }
}

export async function get_sample_image_url({
  dataset_variation,
  dataset_version,
  bundle_id,
  mission_date,
}: Iget_sample_image_url): Promise<string> {
  const server_url = process.env.REMOTE_SERVER_URL;
  const url = `${server_url}/api/v2/metadatas/${dataset_variation}/${dataset_version}/${bundle_id}/${mission_date}/sample_image`;
  console.log(url);
  return url;
}

export async function get_kmeans_image_url({
  dataset_variation,
  dataset_version,
  bundle_id,
  mission_date,
}: Iget_sample_image_url): Promise<string> {
  const server_url = process.env.REMOTE_SERVER_URL;
  const url = `${server_url}/api/v2/images/${dataset_variation}/${dataset_version}/${bundle_id}/${mission_date}?process_method=k_means`;
  console.log(url);
  return url;
}

export async function get_class_labels({
  dataset_variation,
  dataset_version,
  bundle_id,
  mission_date,
  div_width,
  div_height,
  mouse_x,
  mouse_y,
}: Iget_sample_image_url & Iget_class_labels): Promise<IClassValue> {
  const server_url = process.env.REMOTE_SERVER_URL;
  const url = `${server_url}/get-meta-data/${dataset_variation}/${dataset_version}/${bundle_id}/${mission_date}/k_means?mouse_x=${mouse_x}&mouse_y=${mouse_y}&div_width=${div_width}&div_height=${div_height}`;
  console.log(url);
  const res = await fetch(url);
  console.log(res.status);
  console.log(res.statusText);
  const json = await res.json();
  console.log(url);
  console.log(json);
  return json;
}

export async function get_click_spectrum_image_link({
  dataset_variation,
  dataset_version,
  bundle_id,
  mission_date,
  x,
  y,
  process_method,
}: Iget_sample_image_url & {
  x: number;
  y: number;
  process_method: string;
}): Promise<string> {
  const server_url = process.env.REMOTE_SERVER_URL;
  const url = `${server_url}/api/v2/point-plots/${dataset_variation}/${dataset_version}/${bundle_id}/${mission_date}?x=${x}&y=${y}&process_method=${process_method}`;
  return url;
}

export async function get_bundle_meta_data(
  params: Iget_sample_image_url
): Promise<IBundleMetaData> {
  const { bundle_id, dataset_variation, dataset_version, mission_date } =
    params;
  const server_url = process.env.REMOTE_SERVER_URL;
  const url = `${server_url}/api/v2/metadatas/${dataset_variation}/${dataset_version}/${bundle_id}/${mission_date}/bundle`;
  const res = await fetch(url);
  const json: IBundleMetaData = await res.json();
  return json;
}

export async function get_class_spectrum_paths_url({
  dataset_variation,
  dataset_version,
  mission_date,
  bundle_id,
}: Iget_sample_image_url) : Promise<string[]> {
  const server_url = process.env.REMOTE_SERVER_URL;
  const url = `${server_url}/api/v2/class-plots/${dataset_variation}/${dataset_version}/${bundle_id}/${mission_date}?process_method=k_means`;
  const res = await fetch(url);
  const json = await res.json() as string[]
  const paths = json.map(v => {
    return `${server_url}/api/v2/images?path=${v}`;
  })
  return paths

}
