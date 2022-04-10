import DropDown from "../DropDowns/DropDown";
import classes from "./FilterLine.module.css";
const FilterLine = (props) => {
  const specialitiesArray = [
    "كل التخصصات",
    "رئتين",
    "قلب",
    "عظام",
    "جلد",
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

  return (
    <div>
      <input className={classes.input} placeholder="البحث عن الاسم" />
      <DropDown optionsArray={specialitiesArray} />
      <DropDown optionsArray={citiesArray} />
      <button className={classes.btn} onClick={props.searchFilter}>
        بحث
      </button>
    </div>
  );
};
export default FilterLine;
