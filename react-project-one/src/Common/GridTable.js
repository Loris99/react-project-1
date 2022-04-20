import React, { useEffect, useState, useRef, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
// import { AgGridReact } from "@ag-grid-community/react";
import styles from "./GridTable.module.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Fragment } from "react";
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
  //style={{ height: "550px" }}
  return (
    <div className={styles.table}>
      <div className="ag-theme-alpine" style={{ height: "550px" }}>
        <AgGridReact
          column
          enableRtl={true}
          ref={gridRef}
          rowData={props.rowData}
          columnDefs={props.columnDefs}
          rowSelection="multiple"
          autoGroupColumnDef={autoGroupColumnDef}
          groupSelectsChildren={true}
          pagination={true}
          paginationPageSize={length}
          defaultColDef={{ flex: 2 }}
        ></AgGridReact>
      </div>
    </div>
  );
};
export default GridTable;
