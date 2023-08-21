import { todo_interface } from "./todo_interface"

export interface bookmark_interface{
    nombre:string,
    priority:number
    lst_todos:todo_interface[]
}