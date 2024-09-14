import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import FormButton from '../ui/FormButton';

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Medium");

  // Get today's date in yyyy-mm-dd format for the min attribute
  const todayDate = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title, description, deadline, priority);
    setTitle("");
    setDescription("");
    setDeadline("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit} 
      className='container mx-auto lg:grid lg:grid-cols-1 flex justify-center h-dvh items-center bg-gradient-to-tl from-gray-500 via-cyan-300 to-cyan-600'
    >
      <div className='lg:mx-20 mx-7 flex flex-col w-full lg:w-auto rounded-3xl shadow-2xl p-5 bg-neutral-50'>

        <h1 className='py-2 text-cyan-600 font-semibold uppercase'>Add To Do</h1>

        <dl className="w-full divide-y divide-gray-200 space-y-5">

          <div className="lg:grid lg:grid-cols-4 items-center space-x-3 py-2">

            <div className="lg:col-start-1 lg:col-span-2 flex items-center lg:space-x-12 space-x-8">
              <dt className="text-neutral-500 text-xs">Title :</dt>
              <dd className="flex-grow">
                <input 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  placeholder="Title" 
                  className="w-full placeholder:text-xs border border-gray-200 rounded-sm py-1 px-2 text-sm text-gray-500 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                />
              </dd>
            </div>

            <div className="hidden lg:flex items-center space-x-2">
              <dt className="text-neutral-500 text-xs">End Date :</dt>
              <dd>
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  min={todayDate}
                  className="w-full border border-gray-200 rounded-sm px-2 text-sm text-gray-500 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  required
                />
              </dd>
            </div>

            <div className="hidden lg:flex items-center space-x-2">
              <dt className="text-neutral-500 text-xs">Priority :</dt>
              <dd>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full border border-gray-200 rounded-sm px-2 text-sm text-gray-500 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  required
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </dd>
            </div>
          </div>

          <div className="lg:hidden flex items-center space-x-2 py-2">
            <dt className="text-neutral-500 text-xs">End Date :</dt>
            <dd>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                min={todayDate}
                className="w-full border border-gray-200 rounded-sm px-2 text-sm text-gray-500 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                required
              />
            </dd>
          </div>

          <div className="lg:hidden flex items-center space-x-5 py-2">
            <dt className="text-neutral-500 text-xs">Priority :</dt>
            <dd>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full border border-gray-200 rounded-sm px-2 text-sm text-gray-500 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  required
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </dd>
          </div>

          <div className="flex space-x-2 pt-3">
            <dt className="text-neutral-500 text-xs">Description :</dt>
            <dd className="flex-grow">
              <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Description" 
                className="w-full placeholder:text-xs border border-gray-200 rounded-sm py-1 px-2 text-sm text-gray-500 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              />
            </dd>
          </div>
        </dl>

        <div className="flex justify-end">
          <FormButton
            type="submit"
            btnlabel="Add ToDo"
          />
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
