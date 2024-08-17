"use client";

import { IDataGrid } from "@/types/types";
import { Button } from "@mui/joy";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridTreeNodeWithRender,
} from "@mui/x-data-grid";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
interface IDataGridWrapperProps extends HTMLAttributes<HTMLDivElement> {
  rows: IDataGrid[];
}

export const DataGridWrapper: FC<IDataGridWrapperProps> = (props) => {
  const gridCols: GridColDef[] = [
    {
      field: "bundle_id",
      maxWidth: 1000,
      minWidth: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "mission_date",
      maxWidth: 500,
      minWidth: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "image_height",
      maxWidth: 500,
      minWidth: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "image_width",
      maxWidth: 500,
      minWidth: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "top_lattitude",
      maxWidth: 500,
      minWidth: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "bottom_lattitude",
      maxWidth: 500,
      minWidth: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "left_longitude",
      maxWidth: 500,
      minWidth: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "right_longitude",
      maxWidth: 500,
      minWidth: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "link",
      renderCell: (
        params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>
      ) => (
        <Link href={params.value}>
          <Button className="bg-indigo-600 text-white">OPEN</Button>
        </Link>
      ),
      headerClassName: "super-app-theme--header",
    },
    {
      field: "dataset_version",
      maxWidth: 500,
      minWidth: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "dataset_variation",
      maxWidth: 500,
      minWidth: 150,
      headerClassName: "super-app-theme--header",
    },
  ];
  function getRowId(row: IDataGrid) {
    return row['bundle_id'] + row["mission_date"];
  }
  const { rows, ...div_props } = props;
  return (
    <>
      <div {...div_props}>
        <DataGrid
          getRowId={getRowId}
          columns={gridCols}
          rows={rows}
          className="h-full font-mono backdrop-blur-md"
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: "white",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
            "& .MuiDataGrid-cell": {
              color: "white",
              fontFamily: "monospace",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "rgba(255, 255, 255)",
              fontFamily: "monospace",
              fontWeight: "20px",
              color: "black",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "rgba(255, 255, 255)",
              fontFamily: "monospace",
              fontWeight: "20px",
              color: "black",
            },
          }}
        />
      </div>
    </>
  );
};
