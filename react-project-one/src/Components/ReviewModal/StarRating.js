import styles from "./StarRating.module.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";

const NUM_Of_STARS = 5;
const StarRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return [...Array(NUM_Of_STARS)].map((star, index) => {
    const ratingValue = index + 1; //start from 1
    const updateStars = () => {
      setRating(ratingValue);
      props.updateIsRated(true);
    };
    return (
      <label key={index}>
        <input
          type="radio"
          name="rating"
          value={ratingValue}
          onClick={updateStars}
        />
        <FaStar
          className={styles.star}
          color={ratingValue <= (hover || rating) ? "#ffc107" : "grey"}
          size={30}
          onMouseOver={() => setHover(ratingValue)}
          onMouseOut={() => setHover(null)}
        />
      </label>
    );
  });
};
StarRating.propTypes = {
  updateIsRated: PropTypes.func,
};
export default StarRating;
