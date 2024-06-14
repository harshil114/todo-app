import React from "react";
import Header from "./components/Header";
import AddTodos from "./components/AddTodos";
import ShowTodos from "./components/ShowTodos";
import EditTodoButton from "./components/EditTodoButton";
import DeleteTodoButton from "./DeleteTodoButton";

function App() {
  return (
    <div className="container bg-slate-500 mx-auto w-1/2 rounded-md min-h-[80vh] my-5">
      <Header />
      <div className="mx-2 rounded-md my-5">
        <AddTodos />
        <div className="showTodos flex gap-3">
          <ShowTodos />
          <div className="buttons flex justify-center items-end gap-3">
            <EditTodoButton />
            <DeleteTodoButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
