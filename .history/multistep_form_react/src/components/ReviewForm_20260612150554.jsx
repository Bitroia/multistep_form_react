import React from "react";
import {BsFillEmojiHeartEyesFill, BsFillEmojiSmile} from 'react-icons/bs'
const ReviewForm = () => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisdied" name="review" required />
        </label>
        <p>Insatisfeito</p>
      </div>
    </div>
  );
};

export default ReviewForm;
