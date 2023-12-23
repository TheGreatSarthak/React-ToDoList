import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((preValue) => {
      return !preValue;
    });
  }
  return (
    <li
      onClick={
        () => props.isChecked(props.id)
      }
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.name}
    </li>
  );
}
export default ToDoItem;
