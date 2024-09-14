import React from "react";
import { calculateRemainingDays } from "../utils/dateUtils";

const TaskRow = ({ todo, toggleTodo, deleteTodo }) => {

  const getStatusStyles = () => {
    const today = new Date();
    const dueDate = new Date(todo.deadline);

    if (todo.completed) {
      return "ring-1 ring-green-500 bg-green-100 text-green-500";
    }
    if (todo.deadline && today > dueDate) {
      return "ring-1 ring-red-500 bg-red-100 text-red-500"; // Overdue
    }
    return "ring-1 ring-yellow-500 bg-yellow-100 text-yellow-500"; // Pending
  };

  return (
    <dl className="flex ps-8 py-2 w-full space-x-10 text-neutral-500 text-sm items-center">
      
      <div className="text-end text-xl w-[18px]">
        <button onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? (
            <i className="fa-solid fa-circle-check text-green-500"></i>
          ) : (
            <i className="fa-regular fa-circle-check text-gray-900"></i>
          )}
        </button>
      </div>

      <div className="ps-2 text-center">
        <p>{todo.id}</p>
      </div>

      <div className="ps-2 text-start w-40">
        <p>{todo.title}</p>
      </div>

      <div className="ps-2 text-start w-64">
        <p>{todo.description}</p>
      </div>

      <div className="ps-2 text-center lg:w-40">
        {todo.deadline ? (
          <div className="flex flex-row space-x-3">
            <span className="text-xs font-semibold">
              {new Date(todo.deadline).toLocaleDateString()}
            </span>
            <span className="text-xs font-semibold">
              {calculateRemainingDays(todo.deadline)}
            </span>
          </div>
        ) : (
          <p className="text-xs font-semibold">No deadline set</p>
        )}
      </div>

      <div className="ps-2 text-center lg:w-32">
        <p className={`mx-5 rounded-full text-xs ${getStatusStyles()}`}>
          {todo.completed ? "Completed" : todo.deadline && new Date() > new Date(todo.deadline) ? "Due" : "Pending"}
        </p>
      </div>

      <div className="text-center text-lg">
        <button className="text-red-500" onClick={() => deleteTodo(todo.id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>

    </dl>
  );
};

export default TaskRow;
