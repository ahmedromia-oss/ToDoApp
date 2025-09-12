import uuid from 'react-native-uuid';
export class ToDoModel{
    Title:string
    describtion:string
    completed:boolean
    id:string = uuid.v4(); 
}