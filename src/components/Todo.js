import React from "react"
import ToData from "../data/todo.json"
import "./todo.css"
import { SwipeableList, SwipeableListItem } from "@sandstreamdev/react-swipeable-list"
import "@sandstreamdev/react-swipeable-list/dist/styles.css"
function Todo() {
  return (
    <div className="todo-container">
      {ToData.map((postData, index) => {
        return (
          <SwipeableList style={{ "background-color": "#fff" }}>
            <SwipeableListItem
              swipeLeft={{
                content: <div className="hidden-stat">{postData.status}</div>,
              }}
            >
              <div className="todo-card">
                <h4>{postData.topic}</h4>
                <p>{postData.dis}</p>
                <h5>{postData.time}</h5>
              </div>
            </SwipeableListItem>
          </SwipeableList>
        )
      })}
    </div>
  )
}
export default Todo
