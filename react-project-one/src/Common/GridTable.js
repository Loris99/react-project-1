import React, { useEffect, useState, useRef, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
// import { AgGridReact } from "@ag-grid-community/react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { LicenseManager } from "ag-grid-enterprise";
LicenseManager.setLicenseKey("my-license-key");

const GridTable = (props) => {
  //   const [rowData] = useState([
  //     { make: "Toyota", model: "Celica", price: 35000 },
  //     { make: "Ford", model: "Mondeo", price: 32000 },
  //     { make: "Porsche", model: "Boxter", price: 72000 },
  //   ]);
  const gridRef = useRef(null);
  const [rowData, setRowData] = useState();
  useEffect(() => {
    // fetch("https://www.ag-grid.com/example-assets/row-data.json")
    async function getRowData() {
      const response = await fetch(
        "https://www.mashreqins.com/ar/data/0/0/0?draw=1&columns[0][data]=address&columns[0][name]=address&columns[0][searchable]=true&columns[0][orderable]=true&columns[0][search][value]=&columns[0][search][regex]=false&columns[1][data]=major&columns[1][name]=major&columns[1][searchable]=true&columns[1][orderable]=true&columns[1][search][value]=&columns[1][search][regex]=false&columns[2][data]=doctor&columns[2][name]=doctor&columns[2][searchable]=true&columns[2][orderable]=true&columns[2][search][value]=&columns[2][search][regex]=false&columns[3][data]=mobile&columns[3][name]=mobile&columns[3][searchable]=true&columns[3][orderable]=true&columns[3][search][value]=&columns[3][search][regex]=false&columns[4][data]=city&columns[4][name]=city&columns[4][searchable]=true&columns[4][orderable]=true&columns[4][search][value]=&columns[4][search][regex]=false&order[0][column]=0&order[0][dir]=asc&start=0&length=10&search[value]=&search[regex]=false&_=1649055412974",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setRowData(data.response);
    }
    getRowData();
  }, []);

  const onButtonClick = () => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => node.make + " " + node.model)
      .join(", ");
    alert(`selected nodes : ${selectedDataStringPresentation}`);
  };
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
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <button onClick={onButtonClick}>Get Selected Rows</button>
      <AgGridReact
        enableRtl={true}
        ref={gridRef}
        rowData={rowData}
        columnDefs={props.columnDefs}
        rowSelection="multiple"
        autoGroupColumnDef={autoGroupColumnDef}
        groupSelectsChildren={true}
      ></AgGridReact>
    </div>
  );
};
export default GridTable;
