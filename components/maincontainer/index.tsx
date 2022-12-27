import HeaderTask from "../taskheader"
import Tasks from "../tasks"
import Button from "../button"
import { useContext, useEffect, useState } from "react"
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded"
import Link from "next/link"
import axios from "axios"





const MainContainer = () => {


    
    const [ListTasks, setListTasks] = useState<any>([])
    const [isColorBlue, setColorBlue] = useState(true)
    const [countTasks, setCountTasks] = useState(0)
    const [page, setPage] = useState(4)

    useEffect( () =>{
        axios.get(`https://dummyjson.com/todos?limit=${page}&skip=0`)
        .then(res =>{
          const data = res.data.todos
          
          return data
    
        } )
       .then(
        (data) =>  {
          console.log(data)
          
          setListTasks(data)
          
          setCountTasks(data.length) 

          console.log(ListTasks)
          
          console.log("Fetched succesfully")
          
        }
        
       )
      }
      , [page])

    const handleAddTask = () =>{
        const newAddTask:{name:string} = {name:'Tarefa'}
        setListTasks([...ListTasks, newAddTask])
        console.log(ListTasks)
        setCountTasks(prevCountTasks => prevCountTasks + 1)
        
    }

    const DeleteTask = (task:{todo:string}) =>{
        const NewListedTasks:[{todo:string}] = ListTasks.filter((filteredtask:{todo:string}) => filteredtask !== task)
        setListTasks(NewListedTasks)
        setCountTasks(prevCountTasks => prevCountTasks - 1)
    }

    

    const Loadmore = () => {
        
        setPage(prevpage => prevpage + 4)
        console.log(page)
        console.log('feito')
        
    }

    return(
        <>
       
        <div className='flex flex-col justify-start items-center w-full min-h-screen  relative z-0 '>
            <div className='w-11/12 p-2 flex justify-between items-center mt-16 text-neutral-900 border-b border-neutral-900 mb-6 lg:w-2/5' >
                <p className="">{`${countTasks} tasks to do`}</p>
                <p className="text-pgreen">VIEW ALL</p>
            </div>
            <HeaderTask/>
            {ListTasks.map((task:{todo:string, completed:boolean}, index:number) =>
                    
                (index >= 0) && <Tasks 
                key={index} 
                onDeletetask = {()=>DeleteTask(task)} 
                taskname={task.todo}
                    
                colorBg = {(index % 2 == 0) ? "bg-cyan-300" : "bg-green-300"}
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