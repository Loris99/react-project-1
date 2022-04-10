// import { Link } from "react-router-dom";
import { useState } from "react";
import GridTable from "../Common/GridTable";
import FilterLine from "./FilterLine";

const length = 10;

const api =
  "https://www.mashreqins.com/ar/data/0/0/0?draw=1&columns[0][data]=address&columns[0][name]=address&columns[0][searchable]=true&columns[0][orderable]=true&columns[0][search][value]=&columns[0][search][regex]=false&columns[1][data]=major&columns[1][name]=major&columns[1][searchable]=true&columns[1][orderable]=true&columns[1][search][value]=&columns[1][search][regex]=false&columns[2][data]=doctor&columns[2][name]=doctor&columns[2][searchable]=true&columns[2][orderable]=true&columns[2][search][value]=&columns[2][search][regex]=false&columns[3][data]=mobile&columns[3][name]=mobile&columns[3][searchable]=true&columns[3][orderable]=true&columns[3][search][value]=&columns[3][search][regex]=false&columns[4][data]=city&columns[4][name]=city&columns[4][searchable]=true&columns[4][orderable]=true&columns[4][search][value]=&columns[4][search][regex]=false&order[0][column]=0&order[0][dir]=asc&start=0&length=50&search[value]=&search[regex]=false&_=1649055412974";
const MainPage = () => {
  const [columnDefs] = useState([
    { header: "العنوان", field: "address", sortable: true, filter: true },
    { header: "التخصص", field: "major", sortable: true, filter: true },
    { header: "الطبيب", field: "doctor", sortable: true, filter: true },
    {
      header: "معلومات أكثر",
      cellRendererFramework: (params) => (
        <div>
          {/* <Link> */}
          <img src="info_icon.png" />
          {/* </Link> */}
          {/* <Link> */}
          <img src="review_icon.png" />
          {/* </Link> */}
        </div>
      ),
    },
  ]);
  return (
    <div>
      <div>
        <FilterLine />
      </div>
      <div>
        <GridTable api={api} length={length} columnDefs={columnDefs} />
      </div>
    </div>
  );
};
export default MainPage;
