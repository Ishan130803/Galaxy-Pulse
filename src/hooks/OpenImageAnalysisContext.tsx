"use client"
import { Context, createContext, useState, useContext, SetStateAction, Dispatch } from "react";
import { Iget_class_labels, Iget_sample_image_url } from "@/types/types";


type IOpenImageAnalysisContextContext = {
  current_click_x : number,
  current_click_y : number,
  image_params : Iget_sample_image_url,
  setcurrent_click_x : Dispatch<SetStateAction<number>>,
  setcurrent_click_y : Dispatch<SetStateAction<number>>,
  setimage_params : Dispatch<SetStateAction<Iget_sample_image_url>>,

}
/**
 * ## OpenImageAnalysisContextContext
 */
const OpenImageAnalysisContextContext: Context<IOpenImageAnalysisContextContext> = createContext<IOpenImageAnalysisContextContext>(null as any);

OpenImageAnalysisContextContext.displayName = "OpenImageAnalysisContextContext";

interface IOpenImageAnalysisContextContextProviderProps {
  children : React.ReactNode
}

/**
 * ## OpenImageAnalysisContext context provider component
 * 
 */
export const OpenImageAnalysisContextContextProvider: React.FC<IOpenImageAnalysisContextContextProviderProps> = (props) => {
   const [current_click_x, setcurrent_click_x] = useState<number>(0);
   const [current_click_y, setcurrent_click_y] = useState<number>(0);
   const [image_params, setimage_params] = useState<Iget_sample_image_url>(null as any);

   return (
       <OpenImageAnalysisContextContext.Provider value={{current_click_x, current_click_y, image_params , setcurrent_click_x, setcurrent_click_y, setimage_params}}>
           {props.children}
       </OpenImageAnalysisContextContext.Provider>
   )
}

export const useOpenImageAnalysisContext = (): IOpenImageAnalysisContextContext => useContext(OpenImageAnalysisContextContext);