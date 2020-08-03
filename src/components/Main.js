import React, { useState } from "react"
import Todo from "./Todo"
import Toread from "./Toread"
import Header from "./Header"
import "./button.css"
function Main() {
  const [btnClick, setbtnClick] = useState("todo")
  return (
    <>
      <Header />
      <div>
        <button onClick={() => setbtnClick("todo")} className="button">
          Todo
        </button>
        <button onClick={() => setbtnClick("toread")} className="button">
          To Read
        </button>
      </div>
      {btnClick === "todo" ? <Todo /> : <Toread />}
    </>
  )
}

export default Main
