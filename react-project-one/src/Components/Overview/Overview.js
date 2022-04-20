import { useState } from "react";
import GridTable from "../../Common/GridTable";
import StarRating from "../ReviewModal/StarRating";
import classes from "./Overview.module.css";
import PropTypes from "prop-types";
import ReviewModal from "../ReviewModal/ReviewModal";
const Overview = (props) => {
  console.log("props ", props);
  const { updateImageIsClicked, imageIsClicked, close } =
    (props.location && props.location.state) || {};
  const [columnDefs] = useState([
    {
      headerName: "العنوان",
      field: "name",
      resizable: true,
      suppressSizeToFit: true,
    },
    {
      headerName: "تاريخ التقديم",
      // field: "address",
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
    <div dir="rtl" className={classes.container}>
      <div className={classes.information}>
        <h2>اسم الطبيب\ المستشفى\ الدكتور</h2>
        <p>data</p>
        <h2>التخصص</h2>
        <p>data</p>
        <h2>المحافظة</h2>
        <p>data</p>
        <h2>العنوان </h2>
        <p>data</p>
        <h2>الهاتف </h2>
        <p>data</p>
      </div>
      <div className={classes.rate}>
        <h1>معدل التقييم</h1>
        <StarRating />
        <button onClick={updateImageIsClicked}>تقييم</button>
      </div>
      {imageIsClicked && <ReviewModal onClose={close} editMode={true} />}
      <div className={classes.table}>
        <GridTable>columnDefs={columnDefs}</GridTable>
      </div>
    </div>
  );
};
Overview.propTypes = {
  updateImageIsClicked: PropTypes.func,
  imageIsClicked: PropTypes.bool,
  close: PropTypes.func,
};
export default Overview;
