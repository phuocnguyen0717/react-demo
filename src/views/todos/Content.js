import "../todos/Todos.css";

export default function Content({
  setIsClickUpdateButton,
  handleClickUpdateButton,
  todos,
  isLoading,
  handleDeleteTodo,
  ...props
}) {
  // const handleUpdateTodo = (_todo) => {
  //   console.log("UPDATE ------------> ", _todo);
  // };
  return (
    <div className="todo-list">
      {todos?.[0] ? (
        todos.map((todo, idx) => {
          return (
            <div className="todo-item">
              <div className="checker">
                <span className>
                  <input key={idx} type="checkbox" />
                </span>
              </div>
              <button
                className="btn btn-sm btn-warning text-white"
                onClick={() => {
                  setIsClickUpdateButton(true);
                  handleClickUpdateButton(todo);
                }}
              >
                Sửa
              </button>
              <button
                className="btn btn-sm btn-danger text-white"
                onClick={() => {
                  handleDeleteTodo(todo);
                }}
              >
                Xóa
              </button>
              <span>{todo["name"]}</span>
            </div>
          );
        })
      ) : isLoading ? (
        <div className="spinner-border" role="status"></div>
      ) : null}
    </div>
  );
}
