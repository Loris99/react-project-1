import { useEffect, useState } from "react";
import GridTable from "../../Common/GridTable";
import StarRating from "../ReviewModal/StarRating";
import classes from "./Overview.module.css";
import PropTypes from "prop-types";
import ReviewModal from "../ReviewModal/ReviewModal";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const api =
  "https://health-care-project-29d14-default-rtdb.europe-west1.firebasedatabase.app/reviews.json";

const Overview = () => {
  const navigate = useNavigate();
  const [rowData, setRowData] = useState([]);
  const fetchReviews = () => {
    axios.get(api).then((response) => {
      setRowData(response.data);
    });
  };
  useEffect(() => {
    fetchReviews();
  }, []);
  const location = useLocation();
  const [rateBtn, setRateBtn] = useState(false);
  const [columnDefs] = useState([
    {
      headerName: "العنوان",
      field: "name",
      resizable: true,
      suppressSizeToFit: true,
    },
    {
      headerName: "تاريخ التقديم",
      // field: "address", //for the data base
      resizable: true,
      suppressSizeToFit: true,
    },
    {
      headerName: "التقييم",
      // field: "rating",
      resizable: true,
      suppressSizeToFit: true,
    },
    {
      headerName: "ملاحظات",
      // field: "notes",
      resizable: true,
      suppressSizeToFit: true,
    },
  ]);

  return (
    <>
      <div className={classes.arrow}>
        <FaArrowLeft size={50} onClick={() => navigate("/mainpage")} />
      </div>
      <div dir="rtl" className={classes.container}>
        <div className={classes.information}>
          <h2>اسم الطبيب\ المستشفى\ الدكتور</h2>
          <p>
            {location.state.data.doctor === ""
              ? "غير متوفر"
              : location.state.data.doctor}
          </p>
          <h2>التخصص</h2>
          <p>
            {location.state.data.major === ""
              ? "غير متوفر"
              : location.state.data.major}
          </p>
          <h2>المحافظة</h2>
          <p>
            {location.state.data.city === ""
              ? "غير متوفر"
              : location.state.data.city}
          </p>
          <h2>العنوان </h2>
          <p>
            {location.state.data.address === ""
              ? "غير متوفر"
              : location.state.data.address}
          </p>
          <h2>الهاتف </h2>
          <p>
            {location.state.data.mobile === ""
              ? "غير متوفر"
              : location.state.data.mobile}
          </p>
        </div>
        <div className={classes.rate}>
          <h1>معدل التقييم</h1>
          <div>
            <StarRating />
          </div>

          <button
            onClick={() => {
              setRateBtn(true);
            }}
            className={classes.btn}
          >
            تقييم
          </button>
        </div>
        {rateBtn && (
          <ReviewModal
            onClose={() => {
              setRateBtn(null);
            }}
            editMode={true}
          />
        )}
        <div className={classes.table}>
          <GridTable>columnDefs={columnDefs}</GridTable>
        </div>
      </div>
    </>
  );
};
Overview.propTypes = {
  updateImageIsClicked: PropTypes.func,
  imageIsClicked: PropTypes.bool,
  close: PropTypes.func,
};
export default Overview;
