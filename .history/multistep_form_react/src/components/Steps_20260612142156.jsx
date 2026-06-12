import React from 'react'
import "./Steps.css"
import {AiOutLineUser, AiOutLineStar} from 'react-icons/ai'
import{FiSend} from 'react-icons/fi'

const Steps = () => {
  return (
    <div className='steps'>
      <div className="step">
        <AiOutLineUser/>
        <p>Identificação</p>
      </div>
      <div className="step">
        <AiOutLineStar/>
        <p>Avaliação</p>
      </div>
      <div className="step">
        <p>Envio</p>
      </div>
    </div>
  )
}

export default Steps