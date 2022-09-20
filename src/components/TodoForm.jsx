import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  const handleChange = (e) => setInput(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput" className="hidden">
        Create a new todo
      </label>
      <input
        type="text"
        className="p-4 pl-12 mt-4 w-full focus:outline-1 focus:outline-purple-400 placeholder:text-gray-400 rounded-lg"
        placeholder="Create a new todo.."
        value={input}
        onChange={handleChange}
      />
      <button className="hidden" type="submit">
        Create
      </button>
    </form>
  );
}

export default TodoForm;
