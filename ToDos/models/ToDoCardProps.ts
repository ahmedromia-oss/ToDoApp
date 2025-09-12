import { ToDoModel } from "./ToDo.model";

export class ToDoCardProps extends ToDoModel{
    onDelete:(id:string)=>void
    onToggle:(id:string)=>void
}