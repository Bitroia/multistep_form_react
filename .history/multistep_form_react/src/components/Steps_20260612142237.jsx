import React from "react";
import "./Steps.css";
import { AiOutLineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

const Steps = () => {
  return (
    <div className="steps">
      <div className="step">
        <AiOutlineUser />
        <p>Identificação</p>
      </div>
      <div className="step">
        <AiOutLineStar />
        <p>Avaliação</p>
      </div>
      <div className="step">
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
