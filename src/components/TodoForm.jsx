import React, { useRef } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function TodoForm() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputRef.current.value.trim()) {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        content: inputRef.current.value,
        completed: false,
      };
      dispatch(addTodo(newTodo));
    }
    inputRef.current.value = "";
    toast.success("Added new todo");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput" className="hidden">
        Create a new todo
      </label>
      <input
        type="text"
        className="p-4 pl-12 mt-4 w-full focus:outline-1 focus:outline-purple-400 bg-white dark:bg-darkDesaturatedBlue placeholder:text-gray-400 dark:text-gray-400 rounded-lg"
        placeholder="Create a new todo.."
        ref={inputRef}
      />
      <button hidden type="submit">
        Create
      </button>
    </form>
  );
}

export default TodoForm;
