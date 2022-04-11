import React, { useEffect, useState, useRef, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
// import { AgGridReact } from "@ag-grid-community/react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import "ag-grid-enterprise";
// import { LicenseManager } from "ag-grid-enterprise";
// LicenseManager.setLicenseKey("my-license-key");

const GridTable = (props) => {
  const gridRef = useRef(null);
  // const [rowData, setRowData] = useState([]);

  // const fetchData = () => {
  //   axios.get(props.api).then((response) => {
  //     setRowData(response.data.data);
  //     console.log("response", response);
  //   });
  //   // .then(data => setRowData(data))
  //   // .catch(error => {
  //   //   console.log({ error })
  //   // })
  // };
  // useEffect(() => {
  //   fetchData();
  // }, [props.api]);

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
      ></AgGridReact>
    </div>
  );
};
export default GridTable;
