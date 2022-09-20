import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  clearCompletedTodos,
} from "../features/todoSlice";
import TodoItem from "./TodoItem";

function TodoList() {
  const {
    allTodos,
    activeTodos,
    completedTodos,
    showAll,
    showActive,
    showCompleted,
  } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  let renderedTodos;
  if (showAll) {
    renderedTodos = allTodos;
  } else if (showActive) {
    renderedTodos = activeTodos;
  } else if (showCompleted) {
    renderedTodos = completedTodos;
  }

  useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(renderedTodos));
  }, [renderedTodos]);

  return (
    <div className="p-4 mt-4 rounded-lg bg-white dark:bg-darkDesaturatedBlue">
      {renderedTodos.length > 0 ? (
        renderedTodos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })
      ) : (
        <p className="text-center text-gray-900 dark:text-slate-200 my-8">
          You currently have no task :D
        </p>
      )}

      <div className="flex justify-between px-6 pt-6 pb-4 text-slate-600">
        <p>{activeTodos.length} tasks left</p>
        <div className="flex space-x-3 ml-4">
          <button
            className={`${
              showAll && "text-blue-500"
            } hover:text-blue-500 duration-150`}
            onClick={() => dispatch(showAllTodos())}
          >
            All
          </button>
          <button
            className={`${
              showActive && "text-blue-500"
            } hover:text-blue-500 duration-150`}
            onClick={() => dispatch(showActiveTodos())}
          >
            Active
          </button>
          <button
            className={`${
              showCompleted && "text-blue-500"
            } hover:text-blue-500 duration-150`}
            onClick={() => dispatch(showCompletedTodos())}
          >
            Completed
          </button>
        </div>
        <button
          className="hover:text-blue-500 duration-150"
          onClick={() => dispatch(clearCompletedTodos())}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoList;
