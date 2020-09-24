import React, { useState } from "react";
import "./Todo.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DoneIcon from "@material-ui/icons/Done";

function Todo(props) {
  const [line, setLine] = useState(false);

  const doneTask = () => {
    setLine(true);
  };

  return (
    <div className="todo .tilt-in-fwd-tl ">
      <DoneIcon id="todo__Done" onClick={doneTask} />
      <h2 style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </h2>
      <DeleteOutlineIcon
        className="shake-horizontal"
        onClick={() => {
          props.onSelect(props.id);
        }}
      />
    </div>
  );
}

export default Todo;
