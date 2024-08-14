import internal from "stream"

export type IDataGrid = {
  'Bundle_ID' : string  
  'Mission_Date' : string
  'Dataset_version' : string
  'Dataset_variation' : string
}

export type SnackBarParams = {
  open : boolean,
  color : 'success' | 'warning' | 'neutral'
}

export type Iget_sample_image_url = {
  dataset_variation : string  
  dataset_version : string  
  bundle_id : string  
  mission_date : string      
}


export type Iget_class_labels = {
  mouse_x : number,
  mouse_y : number,
  div_height : number,
  div_width : number,
}

export type IClassValue = {
  label : string
}

export type ISpectrumResponseData =  {
  image_url : string,
  spectrum_name : string,
  color_code : [number, number, number]
}