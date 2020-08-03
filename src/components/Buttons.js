import React, { useEffect } from "react"
import Todo from "./Todo"
import Toread from "./Toread"
import { Redirect } from "react-router-dom"
import './button.css'

function Buttons() {
  return (
    <div >
        <button className='button'>Todo</button>
        <button className='button' >To Read</button>
    </div>
  )
}

export default Buttons
