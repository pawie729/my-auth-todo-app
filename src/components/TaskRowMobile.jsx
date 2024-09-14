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
      return "ring-1 ring-red-500 bg-red-100 text-red-500"; 
    }
    return "ring-1 ring-yellow-500 bg-yellow-100 text-yellow-500"; 
  };

  return (
    <>
    <dl className="flex flex-col divide-y divide-gray-200  w-full text-neutral-500 text-sm items-start justify-start">
      

      <div className=" py-3  flex text-center gap-7">

        <div className=" flex space-x-3 items-center">
            <p className=" text-neutral-500 text-xs uppercase font-semibold">S/N :</p>
            <p>{todo.id}</p> 
        </div>

        <div  className="  flex space-x-3 items-center">
            <p className=" text-neutral-500 text-xs uppercase font-semibold">Status :</p>
            <p className={`mx-5 px-2 rounded-full text-xs ${getStatusStyles()}`}>
            {todo.completed ? "Completed" : todo.deadline && new Date() > new Date(todo.deadline) ? "Due" : "Pending"}
            </p>
        </div>
        
      </div>

      <div className=" py-3  flex text-start space-x-3 items-center">
        <p className=" text-neutral-500 text-xs uppercase font-semibold">Title :</p>
        <p>{todo.title}</p>
      </div>

      <div className=" py-3  text-start items-center">
        <p className=" text-neutral-500 text-xs uppercase font-semibold">Description :</p>
        <p>{todo.description}</p>
      </div>

      <div className=" py-3  flex text-center space-x-3 items-center">
        <p className=" text-neutral-500 text-xs uppercase font-semibold">Deadline :</p>
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

      

    </dl>
    <div className=" flex flex-col py-2 justify-between text-center text-lg">



        <button 
            className=" text-2xl"
            onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? (
            <i className="fa-solid fa-circle-check text-green-500"></i>
          ) : (
            <i className="fa-regular fa-circle-check text-gray-900"></i>
          )}
        </button>
        
        <button className="text-red-500" onClick={() => deleteTodo(todo.id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
    </div>
    </>
  );
};

export default TaskRow;
