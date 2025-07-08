import { useState, useEffect } from "react";
import type { ColDef } from "ag-grid-community";
import {
  CompanyLogoRenderer,
  dateFormatter,
  timeFormatter,
} from "../utils/GridUtils";
import { Grid } from "../Components/Grid/Grid";
import { ToggleGridSwitch } from "../Components/Switch";
import "./SpaceMissionDetails.css";

// 1. Define the row data type
// type RowDataType = {
//   Company: string;
//   Date: number;
//   Location: string;
//   Mission: string;
//   Price: number;
//   Rocket: string;
//   Successful: boolean;
//   Time: string;
// };

export default function SpaceMissionDetails() {
  const [rowData, setRowData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showGrid, setShowGrid] = useState(false);

  const pageSize = 20;

  const colDefs = [
    { field: "mission", sortable: true, filter: true, rowGroup: true },
    {
      field: "company",
      filter: true,
      sortable: false,
      rowGroup: false,
      cellRenderer: CompanyLogoRenderer,
    },
    { field: "location", filter: true, sortable: false, rowGroup: false },
    {
      field: "date",
      sortable: true,
      rowGroup: false,
      valueFormatter: dateFormatter,
    },
    {
      field: "price",
      sortable: true,
      rowGroup: false,
      valueFormatter: (params: any) => {
        return "$" + params.value.toLocaleString();
      },
    },
    { field: "successful", sortable: false },
    { field: "rocket", filter: true, rowGroup: false, editable: true },
    {
      field: "time",
      sortable: true,
      rowGroup: false,
      valueFormatter: timeFormatter,
    },
  ]

  // Fetch all data once (simulate server-side pagination)
  useEffect(() => {
    setLoading(true);
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((res) => res.json())
      .then((data) => {
        setRowData(data);
        setLoading(false);
      });
  }, []);

  const autoGroupColumnDef: ColDef<any> = {
    headerName: "Group",
    field: "company",
    cellRendererParams: {
      suppressCount: false,
    },
  };

  return (
    <div className="h-screen p-4">
      <h1 className="text-xl font-bold mb-4">
        AG Grid with Sorting, Filtering, Grouping and Pagination
      </h1>
      <div className="toggle-wrapper">
        <ToggleGridSwitch onToggle={setShowGrid} />
      </div>
      {showGrid && (
        <div className="ag-theme-alpine" style={{ height: 350, width: "100%" }}>
          <Grid
            rowData={rowData}
            loading={loading}
            columnDefs={colDefs}
            groupDisplayType="multipleColumns"
            autoGroupColumnDef={autoGroupColumnDef}
            onCellValueChanged={(event) =>
              console.log(`New Cell Value: ${event.value}`)
            }
            animateRows
            pagination
            pageSize={pageSize}
          />
        </div>
      )}
    </div>
  );
}
