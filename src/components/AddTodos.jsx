import React, { useState } from "react";
import ShowTodos from "./ShowTodos";
import { todoItem } from "../context/context";

function AddTodos() {
  const [inputTodo, setInputTodo] = useState("");
  const [displayTodos,setDisplayTodos] = useState([]);

  const onChangeTodoHandler = (e) => {
    setInputTodo(e.target.value);
  };

  const addTodoBtnHandler = () => {
    setDisplayTodos([...displayTodos,inputTodo]); 
    setInputTodo("");
  };

  return (
    <>
      <todoItem.Provider value={displayTodos}>
        
        <div className="input-container">
          <h2 className="input-heading font-bold mb-4 text-lg">Add a Todo</h2>
          <div className="input-body flex gap-2 mb-4">
            <input
              type="text"
              className="input w-full rounded-md py-1"
              onChange={onChangeTodoHandler}
              value={inputTodo}
            />
            <button
              className="button bg-slate-900 text-white py-1 px-3 rounded-md hover:bg-slate-950 active:bg-slate-900"
              onClick={addTodoBtnHandler}
            >
              Save
            </button>
          </div>
        </div>
        <ShowTodos/>
      </todoItem.Provider>
    </>
  );
}

export default AddTodos;
