import { useEffect, useState } from "react";
import "./App.css";
import Quote from "./components/Quote";
import TodoList from "./components/TodoList";

function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const todos = localStorage.getItem("todos");
    if (todos) return JSON.parse(todos);
    else return [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (e) => {
    e.preventDefault();

    const todo = value.trim();
    if (!todo) {
      alert("Error \nTodo Input is empty");
      return;
    }
    setTodoList([...todoList, { text: todo, isDone: false }]);
    setValue("");
  };

  return (
    <div className="app">
      <h1 className="app__title">Welcome to To-Do App</h1>

      <Quote />

      <form className="app__form">
        <input
          className="app__form--input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="app__form--button" type="submit" onClick={addTodo}>
          Add To-Do
        </button>
      </form>

      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
