import styles from "./DropDown.module.css";
import PropTypes from "prop-types";

const DropDown = (props) => {
  return (
    <select
      name="Options"
      className={styles.dropDown}
      onChange={props.selectedOption}
    >
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
