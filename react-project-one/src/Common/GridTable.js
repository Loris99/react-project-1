import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { AgGridReact } from "ag-grid-react";
// import { AgGridReact } from "@ag-grid-community/react";
import styles from "./GridTable.module.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Fragment } from "react";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import "ag-grid-enterprise";
// import { LicenseManager } from "ag-grid-enterprise";
// LicenseManager.setLicenseKey("my-license-key");
const length = 20;
const GridTable = (props) => {
  const gridRef = useRef();

  const onFirstDataRendered = useCallback(() => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);
  const onGridSizeChanged = useCallback(() => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);
  const loadingOverlayComponent = useMemo(() => {
    return (
      <div
        className="ag-overlay-loading-center"
        style={{ backgroundColor: "lightsteelblue", height: "9%" }}
      >
        <i className="fas fa-hourglass-half"> {props.loadingMessage} </i>
      </div>
    );
  }, []);
  // const loadingOverlayComponentParams = useMemo(() => {
  //   return {
  //     loadingMessage: "One moment please...",
  //   };
  // }, []);
  const noRowsOverlayComponent = useMemo(() => {
    return (
      <div
        className="ag-overlay-loading-center"
        style={{ backgroundColor: "lightcoral", height: "9%" }}
      >
        <i className="far fa-frown"> {props.noRowsMessage}</i>
      </div>
    );
  });

  // const noRowsOverlayComponentParams = useMemo(() => {
  //   return {
  //     noRowsMessageFunc: () => "Sorry - no rows! at: " + new Date(),
  //   };
  // }, []);
  //style={{ height: "550px" }}
  return (
    // <div className={styles.table} style={containerStyle}>
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
        loadingOverlayComponent={loadingOverlayComponent}
        // loadingOverlayComponentParams={loadingOverlayComponentParams}
        noRowsOverlayComponent={noRowsOverlayComponent}
        // noRowsOverlayComponentParams={noRowsOverlayComponentParams}
      ></AgGridReact>
    </div>
    // </div>
  );
};
export default GridTable;
