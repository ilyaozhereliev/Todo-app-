import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const removeComplete = (e) => {
    e.stopPropagation();
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  };

  const renderConfig = () => {
    if (todos.length === 0) {
      return null;
    } else {
      return (
        <button
          type="button"
          className="shadow-none mt-3 btn btn-outline-danger"
          onClick={(e) => removeComplete(e)}
        >
          Delete all completes
        </button>
      );
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mb-5">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
      {renderConfig()}
    </div>
  );
};

export default TodoList;
