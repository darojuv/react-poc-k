import { AgGridReact } from "ag-grid-react";
import type { ColDef, RowGroupingDisplayType, Theme } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import "./Grid.css"
ModuleRegistry.registerModules([AllCommunityModule]);

type AgGridWrapperProps = {
  rowData: any[];
  columnDefs: ColDef[];
  loading?: boolean;
  autoGroupColumnDef?: ColDef;
  groupDisplayType?: RowGroupingDisplayType;
  pageSize?: number;
  onCellValueChanged?: (event: any) => void;
  theme?: Theme | "legacy";
  pagination?: boolean;
  animateRows?: boolean;
  rowModelType?: "infinite" | "clientSide";
};

export function Grid({
  rowData,
  columnDefs,
  loading = false,
  autoGroupColumnDef,
  groupDisplayType = "multipleColumns",
  pageSize = 20,
  onCellValueChanged,
  theme = "legacy",
  pagination = true,
  animateRows = true,
  rowModelType = "clientSide",
}: AgGridWrapperProps) {
  return (
    <div className="ag-theme-alpine grid-wrapper" 
    style={{
        height: "60vh",         // Responsive height
        minHeight: 300,
        width: "100%",
        maxWidth: 1200,         // Optional: limit max width
        margin: "0 auto",       // Center on page
        borderRadius: 8,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        background: "#fff",
        padding: 16,
        boxSizing: "border-box",
      }}
    >
      <AgGridReact
        theme={theme}
        rowData={rowData}
        loading={loading}
        columnDefs={columnDefs}
        groupDisplayType={groupDisplayType}
        autoGroupColumnDef={autoGroupColumnDef}
        onCellValueChanged={onCellValueChanged}
        animateRows={animateRows}
        pagination={pagination}
        paginationPageSize={pageSize}
        rowModelType={rowModelType}
      />
    </div>
  );
}
