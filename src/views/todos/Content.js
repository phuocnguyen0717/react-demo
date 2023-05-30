
import "../todos/Todos.css";

export default function Content({todos,isLoading, ...props }) {
  return (
    <div className="todo-list">
      {todos?.[0]
        ? (todos.map((todo, idx) => {
            return (
              <div className="todo-item">
                <div className="checker">
                  <span className>
                    <input 
                    key={idx}
                    type="checkbox" />
                  </span>
                </div>
                <span>{todo["name"]}</span>
                <a href="#" className="float-right remove-todo-item">
                  <i className="icon-close" />
                </a>
              </div>
            );
          })): isLoading ?<div className="spinner-border" role="status"></div>
        : null}
    </div>
  );
}
