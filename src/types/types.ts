
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