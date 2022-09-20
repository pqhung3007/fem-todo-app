import React, { useState } from "react";
import data from "../data";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState(data);
  return (
    <div className="p-4 mt-4 rounded-lg bg-white ">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
