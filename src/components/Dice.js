import React from 'react'
import './Dice.css'

const Dice = ({face,rolling}) => {
  return (
    <i className={`dice fa-solid fa-dice-${face} ${rolling && "shaking"}`}></i>
  )
}

export default Dice