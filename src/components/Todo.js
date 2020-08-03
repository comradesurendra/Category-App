import React from "react"
import ToData from '../data/todo.json'
import './todo.css'
function Todo() {
  return (
    <div className='todo-container'>
      {ToData.map((postData, index) => {
        return <div className='todo-card'>
          <h4>{postData.topic}</h4>
          <p>{postData.dis}</p>
          <h5>{postData.time}</h5>
        </div>
      })}
    </div>
  )
}
export default Todo