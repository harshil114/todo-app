import React from "react";
import EditTodoButton from "./EditTodoButton";
import DeleteTodoButton from "./DeleteTodoButton";

function ShowTodos() {
  return (
    <div className="showTodo-container">
      <h2 className="showTodo-heading font-bold mb-4 text-xl">Your Todos</h2>
      <div className="todos">
        <div className="todo flex justify-between">
          <div className="text">
          </div>
          <div className="button flex gap-3">
            <EditTodoButton />
            <DeleteTodoButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowTodos;
