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

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
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
          <TodoItem
            key={todo.title}
            {...todo}
            index={index}
            toggleDone={toggleDone}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
