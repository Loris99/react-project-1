// import { Link } from "react-router-dom";
import React from "react";
import overview_icon from "../../icons/overview_icon.png";
import review_icon from "../../icons/review_icon.png";
import { useState, useEffect } from "react";
import GridTable from "../../Common/GridTable";
import FilterLine from "../FilterLine/FilterLine";
import classes from "./MainPage.module.css";
import ReviewModal from "../ReviewModal/ReviewModal";
import axios from "axios";
import Overview from "../ReviewModal/Overview";

const length = 10;

// const api =
//   "https://www.mashreqins.com/ar/data/selectedCity/enteredName/selectedSpeciality?draw=1&columns[0][data]=address&columns[0][name]=address&columns[0][searchable]=true&columns[0][orderable]=true&columns[0][search][value]=&columns[0][search][regex]=false&columns[1][data]=major&columns[1][name]=major&columns[1][searchable]=true&columns[1][orderable]=true&columns[1][search][value]=&columns[1][search][regex]=false&columns[2][data]=doctor&columns[2][name]=doctor&columns[2][searchable]=true&columns[2][orderable]=true&columns[2][search][value]=&columns[2][search][regex]=false&columns[3][data]=mobile&columns[3][name]=mobile&columns[3][searchable]=true&columns[3][orderable]=true&columns[3][search][value]=&columns[3][search][regex]=false&columns[4][data]=city&columns[4][name]=city&columns[4][searchable]=true&columns[4][orderable]=true&columns[4][search][value]=&columns[4][search][regex]=false&order[0][column]=0&order[0][dir]=asc&start=0&length=50&search[value]=&search[regex]=false&_=1649055412974";

const MainPage = (props) => {
  const [imageIsClicked, setImageIsClicked] = useState();
  const [dataFilters, setDataFilters] = useState({
    selectedCity: "0",
    enteredName: "0",
    selectedSpeciality: "0",
  });
  const [rowData, setRowData] = useState([]);
  // const [mode, setMode] = useState();
  const [api, setApi] = useState(
    "https://www.mashreqins.com/ar/data/selectedCity/enteredName/selectedSpeciality?draw=1&columns[0][data]=address&columns[0][name]=address&columns[0][searchable]=true&columns[0][orderable]=true&columns[0][search][value]=&columns[0][search][regex]=false&columns[1][data]=major&columns[1][name]=major&columns[1][searchable]=true&columns[1][orderable]=true&columns[1][search][value]=&columns[1][search][regex]=false&columns[2][data]=doctor&columns[2][name]=doctor&columns[2][searchable]=true&columns[2][orderable]=true&columns[2][search][value]=&columns[2][search][regex]=false&columns[3][data]=mobile&columns[3][name]=mobile&columns[3][searchable]=true&columns[3][orderable]=true&columns[3][search][value]=&columns[3][search][regex]=false&columns[4][data]=city&columns[4][name]=city&columns[4][searchable]=true&columns[4][orderable]=true&columns[4][search][value]=&columns[4][search][regex]=false&order[0][column]=0&order[0][dir]=asc&start=0&length=2580&search[value]=&search[regex]=false&_=1649055412974"
  );

  const fetchData = () => {
    // replace data
    let tempApi;
    console.log("data 1, ", dataFilters);
    tempApi = api.replace(
      /selectedCity|enteredName|selectedSpeciality/gi,
      (matched) => {
        return dataFilters[matched];
      }
    );

    setApi(tempApi);
    // console.log("api, ", api);
    axios.get(api).then((response) => {
      setRowData(response.data.data);
      // console.log("response", response);
    });
    console.log("data 2, ", dataFilters);
    console.log("api, ", api);
    // .then(data => setRowData(data))
    // .catch(error => {
    //   console.log({ error })
    // })
  };

  // useEffect(() => {
  //   fetchData();
  // });

  const updateIsClicked = () => {
    setImageIsClicked(true);
  };
  const [columnDefs] = useState([
    { headerName: "العنوان", field: "address", sortable: true, filter: true },
    { headerName: "التخصص", field: "major", sortable: true, filter: true },
    { headerName: "الطبيب", field: "doctor", sortable: true, filter: true },
    {
      header: "معلومات أكثر",
      cellRendererFramework: (params) => (
        <div>
          <img
            className={classes.icon}
            src={overview_icon}
            alt="over view icon"
          />
          <img
            className={classes.icon}
            src={review_icon}
            onClick={updateIsClicked}
            alt="review icon"
          />
        </div>
      ),
    },
  ]);
  const close = () => {
    setImageIsClicked(null);
  };

  return (
    <div>
      <div>
        <FilterLine
          setDataFilters={setDataFilters}
          dataFilters={dataFilters}
          fetchData={fetchData}
        />
      </div>
      {imageIsClicked && <ReviewModal onClose={close} editMode={true} />}
      <div>
        <GridTable
          api={api}
          length={length}
          columnDefs={columnDefs}
          rowData={rowData}
        />
      </div>
    </div>
  );
};
export default MainPage;
