import styles from "./DropDown.module.css";
import PropTypes from "prop-types";

const DropDown = (props) => {
  // console.log("options array ", props.optionsArray)
  return (
    <select
      name="Options"
      className={styles.dropDown}
      onChange={props.selectedOption}
    >
      {/* <input type="text" placeholder="Search.." id="myInput" /> */}
      {props.optionsArray.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
DropDown.propTypes = {
  selectedOption: PropTypes.func,
  optionsArray: PropTypes.array,
};

export default DropDown;
