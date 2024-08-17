export type IfileBrowseData = {
  bundle_id : string
  dataset_variation : string
  dataset_version : string
  mission_date : string
  image_height : number
  image_width : number
  top_lattitude : number
  bottom_lattitude : number
  left_longitude : number
  right_longitude : number
}

export type IBundleMetaData = IfileBrowseData


export type IDataGrid = {
  link : string
} & IfileBrowseData

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