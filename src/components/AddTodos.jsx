import React from "react";

function AddTodos() {
  return (
    <div className="input-container">
      <h2 className="input-heading font-bold mb-4 text-lg">Add a Todo</h2>
      <div className="input-body flex gap-2 mb-4">
        <input type="text" className="input w-full rounded-md py-1" />
        <button className="button bg-slate-900 text-white py-1 px-3 rounded-md hover:bg-slate-950 active:bg-slate-900">
          Save
        </button>
      </div>
    </div>
  );
}

export default AddTodos;
