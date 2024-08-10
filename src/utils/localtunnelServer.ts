"use server";
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

type Iget_sample_image_url = {
  dataset_variation : string  
  dataset_version : string  
  bundle_id : string  
  mission_date : string      
}
export async function get_sample_image_url({
  dataset_variation ,
  dataset_version ,
  bundle_id ,
  mission_date 
} : Iget_sample_image_url): Promise<string> {
  const server_url = process.env.REMOTE_SERVER_URL;
  const url = `${server_url}/list-data/${dataset_variation}/${dataset_version}/${bundle_id}/${mission_date}/sample_image`;
  console.log(url);
  return url;
}
