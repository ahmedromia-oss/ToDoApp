import { addToDoDto } from "../DTOs/addToDo.dto";
import { ToDoModel } from "./ToDo.model";

export class ToDoContextProps {
  ToDos: ToDoModel[];
  addTodo: (todo: addToDoDto) => void;
  removeToDo: (id: string) => void;
  ToggleToDo: (id: string) => void;
}
