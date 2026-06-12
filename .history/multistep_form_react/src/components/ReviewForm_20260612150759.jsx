import React from "react";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const ReviewForm = () => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisdied" name="review" required />
        </label>
        <BsFillEmojiNeutralFill />
        <p>Poderia ser melhor</p>
        <label className="radio-container">
          <input type="radio" value="neutral" name="review" required />
        </label>
        <BsFillEmojiFrownFill />
        <p>Insatisfeito</p>
        <label className="radio-container">
          <input type="radio" value="unsatisdied" name="review" required />
        </label>
        <BsFillEmojiFrownFill />
        <p>Insatisfeito</p>
        <label className="radio-container">
          <input type="radio" value="unsatisdied" name="review" required />
        </label>
        <BsFillEmojiFrownFill />
        <p>Insatisfeito</p>
      </div>
    </div>
  );
};

export default ReviewForm;
