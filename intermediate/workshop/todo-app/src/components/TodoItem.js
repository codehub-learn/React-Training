import React from "react";

const TodoItem = ({ index, title, done }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={() => console.log("clicked")}
        />
        &nbsp;
        {done ? <strike>{title}</strike> : <span>{title}</span>}
      </label>{" "}
      <button onClick={() => console.log("clicked")}>delete</button>
    </li>
  );
};

export default TodoItem;
