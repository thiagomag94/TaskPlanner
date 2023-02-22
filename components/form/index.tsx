import Link from "next/link";
import Button from "../button";
import {useContext} from "react"
import { FormPropsType } from "./type";
import { ContextData } from "../../contexts/TaskContext";

export default function Form (props:FormPropsType){

  const {titleTask, setTitleTask, description, setDescription, dateEnd, setDateEnd} = props

  const [ListTasks, setListTasks, countTasks, setCountTasks] = useContext<any>(ContextData)

  const handleAddTask = (event:any) =>{
    event.preventDefault()
    const newAddTask:{todo:string, completed:boolean, description:string} = {todo:titleTask, completed:false, description:description}
    setListTasks([...ListTasks, newAddTask])
    console.log(ListTasks)
    setCountTasks(prevcountTasks => prevcountTasks + 1)
    console.log(titleTask)
    console.log(description)
    
    }
    return(
        <>
        <form  onSubmit = {handleAddTask} className="w-4/5 text-white flex flex-col justify-center items-center mt-64">
            <label htmlFor="" className="self-start text-neutral-700">Title</label>
            <input type="text" name="" id="" placeholder="Type task title" maxLength={30} onChange={(event)=> setTitleTask(event.target.value)} className="outline-none text-zinc-800 mb-8 w-full rounded-md border-2 border-pgreen p-4"/>
            <label htmlFor="" className="self-start text-neutral-700" >Description</label>
            <input type="text" name="" id="" placeholder = "Type Task Description" onChange={(event)=> setDescription(event.target.value)}  className="outline-none text-zinc-800 mb-8 w-full rounded-md border-2 border-pgreen p-4" />
            <label htmlFor="" className="self-start text-neutral-700">Date end</label>
            <input type="date" name="" id="" placeholder = "Click to choose date" onChange={(event)=> setDateEnd(event.target.value)} className="outline-none text-zinc-800 mb-8 w-full rounded-md border-2 border-pgreen p-4" />
            <div id="buttons" className="flex w-full justify-between mt-8 px-2">
                <button type="submit"  className="w-28 bg-pblue text-slate-200 rounded-full p-2">Add</button>

                <Link href={{pathname:'/dashboard'}}>
                    <button className="w-28 bg-red-500 text-slate-200 rounded-full p-2">Cancel</button>
                </Link>
            </div>
        </form>
        </>
    )
}