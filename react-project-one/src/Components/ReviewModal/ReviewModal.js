import styles from "./ReviewModal.module.css";
import React from "react";
import ReactDom from "react-dom";
import StarRating from "./StarRating";
// import ReactStars from "react-rating-stars-component";
// import { render } from "react-dom";
import { useState, useEffect } from "react";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  const [title, setTitle] = useState("");
  console.log("mode in MO :", props.editMode);

  // const [editMode, setEditeMode] = useState(true);
  const titleText = {
    editText: " تقييم",
    readText: "عرض التقييم",
  };
  useEffect(() => {
    if (props.editMode === true) {
      setTitle(titleText.editText);
    } else if (props.editMode === false) {
      setTitle(titleText.readText);
    }
  }, [props.editMode]);

  return (
    <div dir="rtl" className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{title}</h1>
        </div>
        <div className={styles.body}>
          <div className={styles.starLine}>
            <StarRating />
          </div>

          <textarea disabled={!props.editMode} />
        </div>
        <div className={styles.footer}>
          {props.editMode && <button className={styles.saveBtn}> حفظ </button>}
          <button className={styles.closeBtn} onClick={props.onClose}>
            إغلاق
          </button>
        </div>
      </div>
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
        <ModalOverlay onClose={props.onClose} editMode={props.editMode} />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};
export default ReviewModal;
