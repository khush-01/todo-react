import "../css/Todo.css";

function Todo({ todo, index, editTodo, statusTodo, deleteTodo }) {
  return (
    <>
      <div key={index} className="todo">
        <p
          className="todo__name"
          style={{
            textDecoration: todo.isDone ? "line-through 3px" : "",
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
    </>
  );
}

export default Todo;
