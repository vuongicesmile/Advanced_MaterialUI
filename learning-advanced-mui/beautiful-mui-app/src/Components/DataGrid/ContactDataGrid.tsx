import { useCallback } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useTheme, Theme } from '@mui/material/styles';
import { contactData } from "../../Data/ContactData.tsx";

const getColumns = (theme: Theme) => {
  return [
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return (
        <div
        >
          {cellValues.value}
        </div>
      );
    }
  },
  {
    field: "role",
    headerName: "Role",
    minWidth: 100,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return (
        <div>
          {cellValues.value}
        </div>
      );
    }
  },
  {
    field: "skills",
    headerName: "Skills",
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<string[]>) => {      
      return (
        <div>
          {cellValues.value ? cellValues.value[0]: ""}
        </div>
      );
    }
  },
  {
    field: "startDate",
    headerName: "Start Date",
    minWidth: 120,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return (
        <div>
          {cellValues.value}
        </div>
      );
    }
  },
  {
    field: "preference",
    headerName: "Work Preference",
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return (
        <div>
          {cellValues.value}
        </div>
      );
    }
  }
];
}

export default function ContactDataGrid() {
  const theme = useTheme();
  const rows = () => [...contactData];
  return (
    <div style={{ height: 500 }}>
      <DataGrid
        rows={rows()}
        columns={getColumns(theme)}
        pageSize={5}
        headerHeight={60}
        rowHeight={120}
      />
    </div>
  )
}