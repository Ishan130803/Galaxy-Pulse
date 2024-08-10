"use client"
import { FC, HTMLAttributes, useEffect, useState } from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
import Snackbar from "@mui/joy/Snackbar";
import { CircularProgress } from "@mui/joy";
import { get_data_bundle_list } from "@/utils/localtunnelServer";
import { DataGridWrapper } from "./DataGridWrapper";
import { IDataGrid, SnackBarParams } from "@/types/types";
import Link from "next/link";
interface IBundleListComponentProps extends HTMLAttributes<HTMLDivElement> {}



export const BundleListComponent: FC<IBundleListComponentProps> = (props) => {
  const [data, setdata] = useState<Array<IDataGrid>>([]);
  const [status, setStatus] = useState<boolean>(false);
  const [snackBarParams, setSnackBarParams] = useState<SnackBarParams>({
    open: false,
    color: "neutral",
  });
  console.log(data)

  useEffect(() => {
    setSnackBarParams({
      open: true,
      color: "neutral",
    });
    const fetchData = async() => {
      try {
        const res = await get_data_bundle_list() 
        
        setdata(res.map( v => {
          return {
            'Bundle_ID' : v[0],
            'Mission_Date' : v[1],
            'Dataset_version' : v[2],
            'Dataset_variation' : v[3],
            'Link' : `/${v[3]}/${v[2]}/${v[0]}/${v[1]}/`
          }
        }));
        setSnackBarParams({
          open: true,
          color: "success",
        });
      } catch {
        setStatus(false);
        setSnackBarParams({
          open: true,
          color: "warning",
        });
      }
    };
    fetchData()
  }, []);

  return (
    <div {...props}>
      <Snackbar
        autoHideDuration={2000}
        open={snackBarParams.open}
        variant={"solid"}
        color={snackBarParams.color}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setSnackBarParams({ ...snackBarParams, open: false });
        }}
      >
        {snackBarParams.color === "neutral" ? (
          <span className="flex gap-2">
            <CircularProgress size="sm" />
            <span>Loading Data...</span>
          </span>
        ) : snackBarParams.color === "success" ? (
          "Loaded Data Successfully"
        ) : (
          "Something Went Wrong with the server"
        )}
      </Snackbar>
      <DataGridWrapper rows={data} />
    </div>
  );
};
