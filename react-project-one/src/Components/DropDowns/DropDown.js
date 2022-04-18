import styles from "./DropDown.module.css";
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
        <option key={index} value={option.value}>{option.label}</option>

      ))}
    </select>
  );
};
export default DropDown;
