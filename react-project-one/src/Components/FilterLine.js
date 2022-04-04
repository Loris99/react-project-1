import DropDown from "./DropDown";
import classes from "./FilterLine.module.css";
const FilterLine = () => {
  const specialitiesArray = [
    "كل التخصصات",
    "رئتين",
    "قلب",
    "عظام",
    "جلد",
    "عيون",
  ];
  const citiesArray = [
    "رام الله",
    "جنين",
    "طولكرم",
    "القدس",
    "غزة",
    "نابلس",
    "الخليل",
    "بيت لحم",
    "بيت جالا",
    "بيت ساحور",
  ];
  return (
    <div>
      <input className={classes.input} placeholder="البحث عن الاسم" />
      <DropDown optionsArray={specialitiesArray} />
      <DropDown optionsArray={citiesArray} />
    </div>
  );
};
export default FilterLine;
