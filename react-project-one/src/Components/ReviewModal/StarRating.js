import styles from "./StarRating.module.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
const NUM_Of_STARS = 5;
const StarRating = () => {
  const [rating, setRaing] = useState(null);
  const [hover, setHover] = useState(null);
  return [...Array(NUM_Of_STARS)].map((star, index) => {
    const ratingValue = index + 1; //start from 1
    return (
      <label>
        <input
          type="radio"
          name="rating"
          value={ratingValue}
          onClick={() => setRaing(ratingValue)}
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
export default StarRating;
