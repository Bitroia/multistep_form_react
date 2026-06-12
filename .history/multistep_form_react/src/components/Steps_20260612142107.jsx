import React from 'react'
import "./Steps.css"
import {AiOutLineUser, AiOutLineStar} from 'react-icons/ai'
import{FiSend} from 'react-icons/fi'

const Steps = () => {
  return (
    <div className='steps'>
      <div className="steps">
        <p>Identificação</p>
      </div>
      <div className="steps">
        <p>Avaliação</p>
      </div>
      <div className="steps">
        <p>Envio</p>
      </div>
    </div>
  )
}

export default Steps