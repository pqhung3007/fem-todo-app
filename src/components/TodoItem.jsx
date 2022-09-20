import React from "react";
import { useDispatch } from "react-redux";
import { markTodoCompleted, removeTodo } from "../features/todoSlice";
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
      onClick={markCompleteHandler}
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
        >
          {content}
        </p>
      </div>

      <button type="submit" onClick={() => dispatch(removeTodo({ id }))}>
        <img src={iconCross} alt="cross" className="" />
      </button>
    </div>
  );
}

export default TodoItem;
