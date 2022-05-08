import { useNavigate } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import GridTable from "../../Common/GridTable";
import FilterLine from "../FilterLine/FilterLine";
import classes from "./MainPage.module.css";
import ReviewModal from "../ReviewModal/ReviewModal";
import axios from "axios";
import { FaRegListAlt, FaInfoCircle } from "react-icons/fa";
const api = "https://www.mashreqins.com/ar/data/selectedCity/enteredName/selectedSpeciality?draw=1&columns%5B0%5D%5Bdata%5D=address&columns%5B0%5D%5Bname%5D=address&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=major&columns%5B1%5D%5Bname%5D=major&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=doctor&columns%5B2%5D%5Bname%5D=doctor&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=mobile&columns%5B3%5D%5Bname%5D=mobile&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=city&columns%5B4%5D%5Bname%5D=city&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=asc&start=0&length=3000&search%5Bvalue%5D=&search%5Bregex%5D=false&_=1651994326676";


const MainPage = () => {
  const navigate = useNavigate();
  const [imageIsClicked, setImageIsClicked] = useState();
  const [dataFilters, setDataFilters] = useState({
    selectedCity: 0,
    enteredName: "0",
    selectedSpeciality: "0",
  });
  const [rowData, setRowData] = useState([]);
  const loadingMessage = "يرجى الإنتظار";
  const noRowsMessage = "لا يوجد معلومات حاليا";
  const fetchData = () => {
    let tempApi;
    tempApi = api.replace(
      /selectedCity|enteredName|selectedSpeciality/gi,
      (matched) => {
        return dataFilters[matched];
      }
    );

    axios.get(tempApi).then((response) => {
      setRowData(response.data.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateImageIsClicked = () => {
    setImageIsClicked(true);
  };

  const [columnDefs] = useState([
    {
      headerName: "العنوان",
      field: "address",
      resizable: true,
    },
    {
      headerName: "التخصص",
      field: "major",
      resizable: true,
    },
    {
      headerName: "الطبيب",
      field: "doctor",
      resizable: true,
    },
    {
      headerName: "معلومات أكثر",
      suppressSizeToFit: false,
      minWidth: 100,
      maxWidth: 120,
      cellRendererFramework: (params) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              columnGap: "20px",
            }}
          >
            <FaRegListAlt size={20} onClick={updateImageIsClicked} />

            <FaInfoCircle
              size={20}
              onClick={() =>
                navigate("/overview", {
                  state: { data: params.data}
                })
              }
            />
          </div>
        );
      },
    },
  ]);
  return (
    <div className={classes.container}>
      <div className={classes.filterStyle}>
        <FilterLine
          setDataFilters={setDataFilters}
          dataFilters={dataFilters}
          fetchData={fetchData}
        />
      </div>
      {imageIsClicked && (
        <ReviewModal
          onClose={() => {
            setImageIsClicked(null);
          }}
          editMode={true}
        />
      )}
      <div className={classes.gridContainer}>
        <GridTable
          loadingMessage={loadingMessage}
          columnDefs={columnDefs}
          rowData={rowData}
        />
      </div>
    </div>
  );
};

export default MainPage;
