import React, { useRef, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const length = 20;
const GridTable = (props) => {
  const gridRef = useRef();

  const onFirstDataRendered = useCallback(() => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  const onGridSizeChanged = useCallback(() => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        column
        enableRtl={true}
        ref={gridRef}
        rowData={props.rowData}
        columnDefs={props.columnDefs}
        pagination={true}
        paginationPageSize={length}
        onFirstDataRendered={onFirstDataRendered}
        onGridSizeChanged={onGridSizeChanged}
        domLayout="autoHeight"
      ></AgGridReact>
    </div>
    // </div>
  );
};
export default GridTable;
