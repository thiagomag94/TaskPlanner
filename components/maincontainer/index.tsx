import HeaderTask from "../taskheader"
import Tasks from "../tasks"
import Button from "../button"
import { useContext, useEffect, useState } from "react"
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded"
import Link from "next/link"
import axios from "axios"
import GetDataTask from "../../services/tasks"
import { createContext } from "vm"
import { ContextData } from "../../contexts/TaskContext"








const MainContainer = () => {


    
    const [ListTasks, setListTasks, countTasks, setCountTasks, page, setPage] = useContext<any>(ContextData)

    useEffect( () =>{
        //GetDataTask(page, setListTasks, setCountTasks, ListTasks)
      }, [page])

    

    const DeleteTask = (task:{todo:string}) =>{
        const NewListedTasks:[{todo:string}] = ListTasks.filter((filteredtask:{todo:string}) => filteredtask !== task)
        setListTasks(NewListedTasks)
        setCountTasks(prevcountTasks => prevcountTasks - 1)
    }

    

    const Loadmore = () => {
        
        setPage(prevpage => prevpage + 4)
        
        console.log('feito')
        
    }

    return(
        <>
       
        <div className='flex flex-col justify-start items-center w-full min-h-screen  relative z-0 '>
            <div className='w-11/12 p-2 flex justify-between items-center mt-16 text-neutral-900 border-b border-neutral-900 mb-6 lg:w-2/5' >
                <p className="">{`${countTasks} tasks to do`}</p>
                <p className="text-pgreen cursor-pointer hover:text-pblue">VIEW ALL</p>
            </div>
            <HeaderTask/>
            {ListTasks.map((task:{todo:string, completed:boolean, description:string}, index:number) =>
                    
                (index >= 0) && <Tasks 
                key={index} 
                onDeletetask = {()=>DeleteTask(task)} 
                taskname={task.todo}
                description={task.description}
                    
                colorBg = {(task.completed === false) ? "bg-red-300" : "bg-green-400"}
                status = {task.completed}
                    />
                    
            )}

            <Button Loadmore ={()=>Loadmore()}
            color="" textColor="text-pgreen" text="Load more..." ring="border-2 border-pblue"
            colorHover='hover:bg-pblue' textHover='hover:text-slate-200' />
            
            <div className="w-fit h-20 relative mt-28">
                
                <Link href={{pathname: 'addTask'}} className="flex justify-center drop-shadow-lg">
                    <AddCircleRoundedIcon 
                    sx={{fontSize:70}} 
                    className="cursor-pointer text-pgreen rounded-ful drop-shadow-lg  hover:text-pblue"
                    />
                </Link>
               
            </div>
            
                
                
        </div>
        
        

        </>
    )
}

export default MainContainer