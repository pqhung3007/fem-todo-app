import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todoSlice";

function TodoForm() {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const { updatedTodo } = useSelector((state) => state.todo);

  useEffect(() => {
    if (updatedTodo.edit === true) {
      setContent(updatedTodo.item.content);
    }
  }, [updatedTodo]);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length > 0) {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        content: content,
        completed: false,
      };
      if (updatedTodo.edit === true) {
        dispatch(updateTodo([updatedTodo.item.id, newTodo]));
        toast.success("Todo updated");
      } else {
        dispatch(addTodo(newTodo));
        toast.success("Added new todo");
      }
    } else {
      toast.error("Todo cannot be empty");
    }
    setContent("");
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
        value={content}
        onChange={handleChange}
      />
      <button hidden type="submit">
        Create
      </button>
    </form>
  );
}

export default TodoForm;
