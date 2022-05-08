import DropDown from "../DropDowns/DropDown";
import classes from "./FilterLine.module.css";
import PropTypes from "prop-types";

const FilterLine = (props) => {
  const specialitiesArray = [
    { value: 0, label: "جميع التخصصات" },
    { value: "اخصائي صدرية وجهاز تنفسي", label: "اخصائي صدرية وجهاز تنفسي" },
    { value: "اطفال وحساسية ومناعة", label: "اطفال وحساسية ومناعة" },
    { value: "اعصاب", label: "اعصاب" },
    { value: "الاسنان", label: "الاسنان" },
    { value: "العظام و المفاصل", label: "العظام و المفاصل" },
    { value: "المستشفيات والمراكز الطبية", label: "المستشفيات والمراكز الطبية" },
    { value: "مختبر", label: "مختبر" },
    { value: "صيدلية", label: "صيدلية" },
    { value: "مختبر", label: "مختبر" },
    { value: "طب اطفال", label: "طب اطفال" },
    { value: "مركز اشعة", label: "مركز اشعة" },
    { value: "المستشفيات", label: "المستشفيات" },
    { value: "مختبر", label: "مختبر" },
    { value: "العيون", label: "العيون" },
    { value: "انف و اذن و حنجرة", label: "انف و اذن و حنجرة" },
    { value: "اوعية دموية", label: "اوعية دموية" },
    { value: "باطني", label: "باطني" },
    { value: "باطني و جهاز هضمي", label: "باطني و جهاز هضمي" },
    { value: "باطني و جهاز هضمي/أطفال", label: "باطني و جهاز هضمي/أطفال" },
    { value: "جراحة  اعصاب", label: "جراحة  اعصاب" },
    { value: "جراحة  قلب", label: "جراحة  قلب" },
    { value: "جراحة اطفال", label: "جراحة اطفال" },
    { value: "جراحة الصدر والاوعية", label: "جراحة الصدر والاوعية" },
    { value: "جراحة الصدر ومناظير الصدر", label: "جراحة الصدر ومناظير الصدر" },
    { value: "جراحة الوجه والفكين", label: "جراحة الوجه والفكين" },
    { value: "جراحة عامة", label: "جراحة عامة" },
    { value: "جراحة قلب و اوعية دموية", label: "جراحة قلب و اوعية دموية" },
    { value: "جلدية وتناسلية", label: "جلدية وتناسلية" },
    { value: "نسائية و توليد", label: "نسائية و توليد" },
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
  };
  const updateSpeciality = (event) => {
    props.dataFilters.selectedSpeciality = event.target.value;
    props.setDataFilters({ ...props.dataFilters });
  };
  const updateName = (event) => {
    const name = event.target.value.trim();
    if (name === "") {
      props.dataFilters.enteredName = 0;
    } else {
      props.dataFilters.enteredName = name;
    }
    props.setDataFilters({ ...props.dataFilters });
  };

  return (
    <>
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
    </>
  );
};
FilterLine.propTypes = {
  dataFilters: PropTypes.object,
  setDataFilters: PropTypes.func,
  fetchData: PropTypes.func,
};
export default FilterLine;
