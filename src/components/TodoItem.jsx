import React from "react";
import iconCross from "../images/icon-cross.svg";
import iconCheck from "../images/icon-check.svg";

function TodoItem({ todo }) {
  const { id, content } = todo;

  return (
    <div className="border-b border-gray-100 dark:border-slate-500 md:px-6 py-4 flex justify-between items-center">
      <div className="space-x-4 flex items-center">
        {/* <input className="rounded-full inline w-4 h-4" type="checkbox" /> */}
        <div className="w-5 h-5 flex justify-center items-center ml-0 border bg-gradient-to-br from-sky-400 to-violet-400 rounded-full">
          <img src={iconCheck} className="w-3" alt="" />
        </div>
        <p className="text-gray-900 dark:text-slate-200">{content}</p>
      </div>
      <button type="submit">
        <img src={iconCross} alt="cross" className="" />
      </button>
    </div>
  );
}

export default TodoItem;
