import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

const TodoApp = ({ initialTodos }) => {
  const [toDoInput, setToDoInput] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  const updateInput = (e) => {
    setToDoInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      title: toDoInput,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setToDoInput("");
  };

  return (
    <div>
      <h2>My ToDos</h2>
      <form>
        Add ToDo: <input type="text" value={toDoInput} onChange={updateInput} />
        <button type="submit" onClick={addTodo}>
          Add ToDo
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={todo.title} {...todo} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
