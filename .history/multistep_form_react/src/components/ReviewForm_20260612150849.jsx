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
        <BsFillEmojiSmileFill />
        <p>Satisfeito</p>
        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" required />
        </label>
        <BsFillEmojiFrownFill />
        <p>Muito Sa</p>
        <label className="radio-container">
          <input type="radio" value="very_satisfied" name="review" required />
        </label>
        <BsFillEmojiFrownFill />
        <p>Insatisfeito</p>
      </div>
    </div>
  );
};

export default ReviewForm;
