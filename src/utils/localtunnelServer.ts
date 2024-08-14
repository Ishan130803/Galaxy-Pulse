"use server";

import {
  IClassValue,
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

export async function get_data_bundle_list(): Promise<Array<string>> {
  const server_url = process.env.REMOTE_SERVER_URL;
  console.log(`${server_url}/list-data`);
  const res = await fetch(`${server_url}/list-data`);
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
  const url = `${server_url}/list-data/${dataset_variation}/${dataset_version}/${bundle_id}/${mission_date}/sample_image`;
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
  const url = `${server_url}/list-data/${dataset_variation}/${dataset_version}/${bundle_id}/${mission_date}/k_means`;
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
  const url = `${server_url}/get-meta-data/${dataset_variation}/${dataset_version}/${bundle_id}/${mission_date}/k_means?mouse_x=${mouse_x}&mouse_y=${mouse_y}&div_width=${div_width}&div_height=${div_height}`
  console.log(url);
  const res = await fetch(url);
  console.log(res.status)
  console.log(res.statusText)
  const json = await res.json();
  console.log(json);
  return json;
}

export async function get_click_spectrum_image_link({
  dataset_variation,
  dataset_version,
  bundle_id,
  mission_date,
}: Iget_sample_image_url): Promise<string> {
  const server_url = process.env.REMOTE_SERVER_URL;
  const url = `${server_url}/list-data/${dataset_variation}/${dataset_version}/${bundle_id}/${mission_date}/sample_image`;
  console.log(url);
  return url;
}
