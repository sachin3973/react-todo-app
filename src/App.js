import React, { useState } from "react";
import Todo from "./Todo";
import "./App.css";

function App() {
  // React way of writing a varibale...
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([
    "Learn some JavaScript",
    "Complete the Portfolio",
  ]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([inputText, ...todos]);
    setInputText("");
    // console.log("This is the todo list", [...todos, inputText]);
  };

  const deleteTodo = (id) => {
    setTodos((todos) => {
      return todos.filter((element, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="app">
      <img
        src="https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676_640.png"
        alt=""
      />
      <h3>
        Alright! what are we doing today!
        <span role="img" aria-label="face with raised eyebrow">
          🤨
        </span>
      </h3>
      <div className="app__container">
        <form>
          <input
            placeholder="Enter your task... "
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
            type="text"
          />
          <button disabled={!inputText} type="submit" onClick={addTodo}>
            ADD TODO
          </button>
        </form>

        {todos.map((todo, index) => (
          <Todo key={index} id={index} text={todo} onSelect={deleteTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
