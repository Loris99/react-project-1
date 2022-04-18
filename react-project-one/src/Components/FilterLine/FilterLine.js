import DropDown from "../DropDowns/DropDown";
import classes from "./FilterLine.module.css";
const FilterLine = (props) => {
  const specialitiesArray = [
    { value: 0, label: "جميع التخصصات" },
    { value: "اعصاب", label: "اعصاب" },
    { value: "الاسنان", label: "الاسنان" },
    { value: "الصدرية", label: "الصدرية" },
    { value: "مختبر", label: "مختبر" },
    { value: "عيون", label: "عيون" },
  ];
  const citiesArray = [
    { value: 0, label: "الجميع" },
    { value: 1, label: "جنين" },
    { value: 3, label: "نابلس" },
    { value: 5, label: "طولكرم" },
    { value: 7, label: "قلقيلية" },
    { value: 9, label: "سلفيت" },
    { value: 11, label: "أريحا" },
    { value: 13, label: "رام الله" },
    { value: 15, label: "القدس" },
    { value: 17, label: "بيت لحم" },
    { value: 19, label: "الخليل" },
    { value: 21, label: "غزة" },
    { value: 23, label: "طوباس" },
  ];

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
    const name = event.target.value;
    if (name === "") {
      props.dataFilters.enteredName = 0;
    } else {
      props.dataFilters.enteredName = name;
    }
    props.setDataFilters({ ...props.dataFilters });
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
