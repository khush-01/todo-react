import Todo from "./Todo";
import "../css/TodoList.css";

function TodoList({ todoList, setTodoList }) {
  const statusTodo = (index) => {
    const tempList = [...todoList];
    tempList[index].isDone = tempList[index].isDone ? false : true;
    setTodoList(tempList);
  };

  const editTodo = (index) => {
    const newTodo = prompt("Enter new todo", todoList[index].text);

    if (newTodo == null || newTodo === "") return;

    const tempList = [...todoList];
    tempList[index].text = newTodo;
    setTodoList(tempList);
  };

  const deleteTodo = (index) => {
    const tempList = [...todoList];
    tempList.splice(index, 1);
    setTodoList(tempList);
  };

  const clearAll = () => {
    if (!todoList.length) alert("Error \nList is already empty");
    setTodoList([]);
  };

  return (
    <>
      <div>
        <h2 className="todolist__display">To-Do List</h2>
        <button className="todolist__display--clear" onClick={clearAll}>
          Clear All
        </button>
      </div>
      <div>
        {todoList.map((todo, index) => (
          <Todo
            todo={todo}
            index={index}
            editTodo={editTodo}
            statusTodo={statusTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;
