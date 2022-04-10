import styles from "./DropDown.module.css";
const DropDown = (props) => {
  return (
    <select name="Options" className={styles.dropDown}>
      {/* <input type="text" placeholder="Search.." id="myInput" /> */}
      {props.optionsArray.map((value, index) => (
        <option key={index}>{value}</option>
      ))}
    </select>
  );
};
export default DropDown;
