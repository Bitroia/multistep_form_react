import React from "react";
import {BsFillEmoji} from 'first'
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
