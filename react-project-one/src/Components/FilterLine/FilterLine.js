import DropDown from "../DropDowns/DropDown";
import classes from "./FilterLine.module.css";
import { useState, useRef } from "react";
const FilterLine = (props) => {
  // const nameToSearchRef = useRef();
  const specialitiesArray = [
    "كل التخصصات",
    "اعصاب",
    "الاسنان",
    "الصدرية",
    "مختبر",
    "عيون",
  ];
  const citiesArray = [
    "الجميع",
    "رام الله",
    "جنين",
    "طولكرم",
    "القدس",
    "غزة",
    "نابلس",
    "الخليل",
    "بيت لحم",
    " أريحا",
    "طوباس",
    "قلقيلية",
    "طوباس",
  ];

  const searchHandler = () => {
    console.log("updated data,", props.dataFilters);
  };
  const updateCity = (event) => {
    props.dataFilters.selectedCity = event.target.value;
    props.setDataFilters({ ...props.dataFilters });
    // console.log("updated city,", props.dataFilters);
  };
  const updateSpeciality = (event) => {
    props.dataFilters.selectedSpeciality = event.target.value;
    props.setDataFilters({ ...props.dataFilters });
    // console.log("updated city,", props.dataFilters);
  };
  const updateName = (event) => {
    props.dataFilters.enteredName = event.target.value;
    props.setDataFilters({ ...props.dataFilters });
    // console.log("updated name,", props.dataFilters);
  };

  return (
    <div>
      <input
        className={classes.input}
        placeholder="البحث عن الاسم"
        onChange={updateName}
      />
      <DropDown
        optionsArray={specialitiesArray}
        selectedOption={updateSpeciality}
      />
      <DropDown optionsArray={citiesArray} selectedOption={updateCity} />

      <button className={classes.btn} onClick={searchHandler}>
        بحث
      </button>
    </div>
  );
};
export default FilterLine;
