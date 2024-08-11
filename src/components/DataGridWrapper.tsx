"use client"

import { IDataGrid } from "@/types/types";
import { Button } from "@mui/joy";
import { DataGrid, GridColDef, GridRenderCellParams, GridTreeNodeWithRender } from "@mui/x-data-grid";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
interface IDataGridWrapperProps extends HTMLAttributes<HTMLDivElement> {
  rows : IDataGrid[]
};

export const DataGridWrapper: FC<IDataGridWrapperProps> = (props) => {
  const gridCols: GridColDef[] = [
    {
      'field' : "Bundle_ID",
      'maxWidth' : 1000,
      'minWidth' : 500,
    },
    {
      'field' : "Mission_Date",
      'maxWidth' : 500,
      'minWidth' : 150,
    },
    {
      'field' : "Dataset_version",
      'maxWidth' : 500,
      'minWidth' : 150,
    },
    {
      'field' : "Dataset_variation",
      'maxWidth' : 500,
      'minWidth' : 150,
    },
    {
      'field' : "Link",
      renderCell: (params : GridRenderCellParams<any, any, any, GridTreeNodeWithRender>) => <Link href ={params.value} >
        <Button className="bg-indigo-600 text-white">
          OPEN
        </Button>
        </Link>
    }

  ]
  function getRowId(row : IDataGrid) {
    return row['Bundle_ID'] + row['Mission_Date'];
  }
  const {rows, ...div_props} = props
  return <>
    <div {...div_props}>
        <DataGrid
          getRowId={getRowId}
          columns={gridCols}
          rows={rows}
          className="h-full"
        />
    </div>
  </>
}
