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
        <div className="todo flex justify-between">
          <div className="text font-medium">
            <ul className="">
              {value.map((item) => (
                <li className="flex">
                  {item}
                  <div className="buttons flex">
                    <EditTodoButton /> <DeleteTodoButton />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex gap-3"></div>
        </div>
      </div>
    </div>
  );
}

export default ShowTodos;
