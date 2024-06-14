import React from "react";
import Header from "./components/Header";
import AddTodos from "./components/AddTodos";
import ShowTodos from "./components/ShowTodos";

function App() {
  return (
    <div className="container bg-slate-500 mx-auto w-1/2 rounded-md min-h-[80vh] my-5">
      <Header />
      <div className="mx-5 rounded-md my-5">
        <AddTodos />
        <ShowTodos />
      </div>
    </div>
  );
}

export default App;
