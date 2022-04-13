import DropDown from "../DropDowns/DropDown";
import classes from "./FilterLine.module.css";
const FilterLine = (props) => {
  // const nameToSearchRef = useRef();
  const specialitiesArray = [
    "جميع التخصصات",
    "اعصاب",
    "الاسنان",
    "الصدرية",
    "مختبر",
    "عيون",
  ];
  // const citiesArray = {
  //   0: "الجميع",
  //   13: "رام الله",
  //   1: "جنين",
  //   5: "طولكرم",
  //   15: "القدس",
  //   21: "غزة",
  //   3: "نابلس",
  //   19: "الخليل",
  //   17: "بيت لحم",
  //   11: " أريحا",
  //   23: "طوباس",
  //   7: "قلقيلية",
  //   9: "سلفيت",
  // };
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

  // const searchHandler = () => {
  //   console.log("updated data,", props.dataFilters);
  // };
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

      <button className={classes.btn} onClick={props.fetchData}>
        بحث
      </button>
    </div>
  );
};
export default FilterLine;
