import React from "react";
import { useDispatch } from "react-redux";
import { markTodoCompleted, removeTodo, editTodo } from "../features/todoSlice";
import iconCross from "../images/icon-cross.svg";
import iconCheck from "../images/icon-check.svg";

function TodoItem({ todo }) {
  const { id, content, completed } = todo;
  const dispatch = useDispatch();

  const markCompleteHandler = () => {
    dispatch(markTodoCompleted({ id }));
  };

  return (
    <div
      className=" border-b border-gray-100 dark:border-slate-500 md:px-6 py-4 flex justify-between items-center cursor-pointer"
      id="hello"
    >
      <div className="space-x-4 flex items-center">
        <div
          className={`w-5 h-5 flex justify-center items-center ml-0 border rounded-full
          ${completed && "bg-gradient-to-br from-sky-400 to-violet-400"}`}
        >
          <img src={iconCheck} className="w-3" alt="" />
        </div>
        <p
          className={`text-gray-900 dark:text-slate-200 ${
            completed &&
            "line-through decoration-1 text-slate-400 dark:text-gray-500"
          }`}
          onClick={markCompleteHandler}
        >
          {content}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <button type="submit" onClick={() => dispatch(editTodo({ todo }))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </button>
        <button type="submit" onClick={() => dispatch(removeTodo({ id }))}>
          <img src={iconCross} alt="cross" className="w-4" />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
