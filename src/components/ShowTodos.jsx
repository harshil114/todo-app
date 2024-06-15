import React, { useContext } from "react";
import EditTodoButton from "./EditTodoButton";
import DeleteTodoButton from "./DeleteTodoButton";
import { todoItem } from "../context/context";
function ShowTodos() {
  const value = useContext(todoItem);
  return (
    <div className="showTodo-container">
      <h2 className="showTodo-heading font-bold mb-4 text-xl">Your Todos</h2>
      <div className="todos">
        <div className="todo">
          <div className="text font-medium">
            <ul className="text-list">
              {value.map((item) => (
                <li className="flex justify-between mt-3">
                  {item}
                  <div className="buttons flex gap-4">
                    <EditTodoButton /> <DeleteTodoButton />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowTodos;
