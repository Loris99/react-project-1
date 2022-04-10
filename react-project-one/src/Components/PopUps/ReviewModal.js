import styles from "./PopUps.module.css";
import React from "react";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <h1>information</h1>
      <p>more information</p>
      <button className={styles.btn} onClick={props.onClose}>
        إغلاق
      </button>
    </div>
  );
};
const ReviewModal = (props) => {
  return (
    <div>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};
export default ReviewModal;
