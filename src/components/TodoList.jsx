import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const { allTodos } = useSelector((state) => state.todo);
  return (
    <div className="p-4 mt-4 rounded-lg bg-white dark:bg-darkDesaturatedBlue">
      {allTodos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}

      <div className="flex justify-between px-6 pt-6 pb-4 text-slate-600">
        <p className="">5 items left</p>
        <div className="flex space-x-3 ml-4">
          <button className="text-blue-500">All</button>
          <button className="">Active</button>
          <button className="">Completed</button>
        </div>
        <button>Clear Completed</button>
      </div>
    </div>
  );
}

export default TodoList;
