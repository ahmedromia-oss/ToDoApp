import { ToDos } from "@/dataStore";
import { createContext, ReactNode } from "react";
import { addToDoDto } from "../DTOs/addToDo.dto";
import { useToDo } from "../hooks/useToDo";
import { ToDoContextProps } from "../models/ToDoContextProps";

export const ToDoContext = createContext<ToDoContextProps>({
  ToDos: ToDos,
  addTodo: (addTodo: addToDoDto) => {},
  removeToDo: (id: string) => {},
  ToggleToDo: (id: string) => {},
});
// Fixed: children should be inside props object
export const ToDoContextProvider = ({ children }: { children: ReactNode }) => {
  const { todos, toggleTodo, addTodo, deleteTodo } = useToDo();

  return (
    <ToDoContext.Provider
      value={{
        ToDos: todos,
        addTodo: addTodo,
        removeToDo: deleteTodo,
        ToggleToDo: toggleTodo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};