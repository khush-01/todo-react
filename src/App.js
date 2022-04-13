import { useEffect, useState } from "react";
import "./App.css";
import "./Todo.css";

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

    if (!value) alert("Error \nTodo Input is empty");

    setTodoList([...todoList, { text: value, isDone: false }]);
    setValue("");
  };

  const statusTodo = (index) => {
    const tempList = [...todoList];
    tempList[index].isDone = tempList[index].isDone ? false : true;
    setTodoList(tempList);
  };

  const editTodo = (index) => {
    const newTodo = prompt("Enter new todo");

    const tempList = [...todoList];
    tempList[index].text = newTodo;
    setTodoList(tempList);
  };

  const deleteTodo = (index) => {
    const tempList = [...todoList];
    tempList.splice(index, 1);
    setTodoList(tempList);
  };

  return (
    <div className="app">
      <h1 className="app__title">Welcome to Todo App</h1>

      <form className="app__form">
        <input
          className="app__form--input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="app__form--button" type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>

      <h2 className="app__display">List of Todos</h2>
      {todoList.map((todo, index) => (
        <div className="todo">
          <p
            className="todo__name"
            style={{
              textDecoration: todo.isDone ? "line-through" : "",
              color: todo.isDone ? "green" : "",
            }}
          >
            {todo.text.toUpperCase()}
          </p>
          <div className="todo__actions">
            {todo.isDone ? (
              <button
                className="todo__actions--edit"
                onClick={() => editTodo(index)}
                disabled
              >
                Edit
              </button>
            ) : (
              <button
                className="todo__actions--edit"
                onClick={() => editTodo(index)}
              >
                Edit
              </button>
            )}
            {todo.isDone ? (
              <button
                className="todo__actions--status"
                onClick={() => statusTodo(index)}
              >
                Unmark
              </button>
            ) : (
              <button
                className="todo__actions--status"
                onClick={() => statusTodo(index)}
              >
                Mark
              </button>
            )}

            <button
              className="todo__actions--del"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
