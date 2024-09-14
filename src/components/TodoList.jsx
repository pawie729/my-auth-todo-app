import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TaskRow from "./TaskRow";
import TaskRowMobile from "./TaskRowMobile";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);


  const highPriorityTodos = todos.filter((todo) => todo.priority === "High");
  const mediumPriorityTodos = todos.filter((todo) => todo.priority === "Medium");
  const lowPriorityTodos = todos.filter((todo) => todo.priority === "Low");

  return (
    <div className='container mx-auto lg:grid lg:grid-cols-1 flex justify-center lg:h-screen bg-gradient-to-tl from-gray-500 via-cyan-300 to-cyan-600'>
      <form className='lg:mx-20 mx-7 my-20 flex flex-col rounded-3xl shadow-2xl p-5 bg-neutral-50 w-full h-fit lg:w-auto'>
        <h1 className='p-2 text-cyan-600 font-semibold uppercase'>To Do List</h1>

        <dl className="hidden lg:flex ps-8 w-full space-x-10 divide-x divide-gray-300 text-neutral-500 text-xs uppercase font-semibold">
          <div className="text-center w-[18px] "><p></p></div>
          <div className="ps-2 text-center"><p>#</p></div>
          <div className="ps-2 text-start lg:w-40"><p>Title</p></div>
          <div className="ps-2 text-start lg:w-64"><p>Description</p></div>
          <div className="ps-2 text-start lg:w-40"><p>Deadline</p></div>
          <div className="text-center lg:w-32"><p>Status</p></div>
        </dl>

        {todos.length === 0 ? (
          <p className=" mt-7 text-sm text-center text-gray-500">No tasks assigned yet</p>
        ) : (
          <Accordion allowMultiple defaultIndex={[0, 1, 2]}>
            {highPriorityTodos.length > 0 && (
              <AccordionItem>
                <AccordionButton className="my-5 p-2 space-x-2 shadow-sm">
                  <AccordionIcon />
                  <Box flex="1" textAlign="left" className="text-red-500 text-sm font-semibold">
                    Assigned Tasks | High Priority
                  </Box>
                </AccordionButton>

                <AccordionPanel>
                  {highPriorityTodos.map((todo) => (
                    <div key={todo.id} className="border-b border-gray-200">
                      <div className="hidden lg:flex">
                        <TaskRow
                          todo={todo}
                          toggleTodo={toggleTodo}
                          deleteTodo={deleteTodo}
                        />
                      </div>
                      <div className="flex lg:hidden">
                        <TaskRowMobile
                          todo={todo}
                          toggleTodo={toggleTodo}
                          deleteTodo={deleteTodo}
                        />
                      </div>
                    </div>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            )}

            {mediumPriorityTodos.length > 0 && (
              <AccordionItem>
                <AccordionButton className="my-5 p-2 space-x-2 shadow-sm">
                  <AccordionIcon />
                  <Box flex="1" textAlign="left" className="text-yellow-500 text-sm font-semibold">
                    Assigned Tasks | Medium Priority
                  </Box>
                </AccordionButton>

                <AccordionPanel>
                  {mediumPriorityTodos.map((todo) => (
                    <div key={todo.id} className="border-b border-gray-200">
                      <div className="hidden lg:flex">
                        <TaskRow
                          todo={todo}
                          toggleTodo={toggleTodo}
                          deleteTodo={deleteTodo}
                        />
                      </div>
                      <div className="flex lg:hidden">
                        <TaskRowMobile
                          todo={todo}
                          toggleTodo={toggleTodo}
                          deleteTodo={deleteTodo}
                        />
                      </div>
                    </div>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            )}

            {lowPriorityTodos.length > 0 && (
              <AccordionItem>
                <AccordionButton className="my-5 p-2 space-x-2 shadow-sm">
                  <AccordionIcon />
                  <Box flex="1" textAlign="left" className=" text-sm font-semibold text-green-500">
                    Assigned Tasks | Low Priority
                  </Box>
                </AccordionButton>

                <AccordionPanel>
                  {lowPriorityTodos.map((todo) => (
                    <div key={todo.id} className="border-b border-gray-200">
                      <div className="hidden lg:flex">
                        <TaskRow
                          todo={todo}
                          toggleTodo={toggleTodo}
                          deleteTodo={deleteTodo}
                        />
                      </div>
                      <div className="flex lg:hidden">
                        <TaskRowMobile
                          todo={todo}
                          toggleTodo={toggleTodo}
                          deleteTodo={deleteTodo}
                        />
                      </div>
                    </div>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            )}
          </Accordion>
        )}
      </form>
    </div>
  );
};

export default TodoList;
