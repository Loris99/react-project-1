import React, { useEffect, useState, useRef, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
// import { AgGridReact } from "@ag-grid-community/react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import "ag-grid-enterprise";
// import { LicenseManager } from "ag-grid-enterprise";
// LicenseManager.setLicenseKey("my-license-key");
const length = 10;
const GridTable = (props) => {
  const gridRef = useRef(null);

  const autoGroupColumnDef = useMemo(
    () => ({
      field: "model",
      cellRendererParams: {
        checkbox: true,
      },
    }),
    []
  );

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: 800 }}>
      <AgGridReact
        enableRtl={true}
        ref={gridRef}
        rowData={props.rowData}
        columnDefs={props.columnDefs}
        rowSelection="multiple"
        autoGroupColumnDef={autoGroupColumnDef}
        groupSelectsChildren={true}
        pagination={true}
        paginationPageSize={length}
      ></AgGridReact>
    </div>
  );
};
export default GridTable;
