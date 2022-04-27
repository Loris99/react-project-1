import { useNavigate } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import GridTable from "../../Common/GridTable";
import FilterLine from "../FilterLine/FilterLine";
import classes from "./MainPage.module.css";
import ReviewModal from "../ReviewModal/ReviewModal";
import axios from "axios";
import { FaRegListAlt, FaInfoCircle } from "react-icons/fa";
const api =
  "https://www.mashreqins.com/ar/data/selectedCity/enteredName/selectedSpeciality?draw=1&columns[0][data]=address&columns[0][name]=address&columns[0][searchable]=true&columns[0][orderable]=true&columns[0][search][value]=&columns[0][search][regex]=false&columns[1][data]=major&columns[1][name]=major&columns[1][searchable]=true&columns[1][orderable]=true&columns[1][search][value]=&columns[1][search][regex]=false&columns[2][data]=doctor&columns[2][name]=doctor&columns[2][searchable]=true&columns[2][orderable]=true&columns[2][search][value]=&columns[2][search][regex]=false&columns[3][data]=mobile&columns[3][name]=mobile&columns[3][searchable]=true&columns[3][orderable]=true&columns[3][search][value]=&columns[3][search][regex]=false&columns[4][data]=city&columns[4][name]=city&columns[4][searchable]=true&columns[4][orderable]=true&columns[4][search][value]=&columns[4][search][regex]=false&order[0][column]=0&order[0][dir]=asc&start=0&length=3000&search[value]=&search[regex]=false&_=1649055412974";

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
    console.log(tempApi);
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
        console.log({ params });
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
                  state: { data: params.data },
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
