import HeaderTask from "../taskheader"
import Tasks from "../tasks"
import Button from "../button"
import { useState } from "react"



const MainContainer = () => {


   
    const [ListTasks, setListTasks] = useState<any>([])

    const handleAddTask = () =>{
        const newAddTask:{name:string} = {name:'Tarefa'}
        setListTasks([...ListTasks, newAddTask])
        setTimeout(()=> {console.log(ListTasks)}, 5000)
    }

    const DeleteTask = (task:{name:string}) =>{
        const NewListedTasks:[{name:string}] = ListTasks.filter((filteredtask:{name:string}) => filteredtask !== task)
        setListTasks(NewListedTasks)
    }

    return(
        <>
        <div className='flex flex-col justify-start items-center w-11/12 h-3/6 absolute top-40 overflow-hidden'>
            <div className='w-11/12 p-2 flex justify-between items-center mt-16 text-neutral-900 border-b border-neutral-900 mb-6' >
                <p className="">8 todos</p>
                <p className="text-pgreen">View all</p>
            </div>
            <HeaderTask/>
            {ListTasks.map((task:{name:string}, index:number) =>
                <Tasks 
                key={index} 
                onDeletetask = {()=>DeleteTask(task)} 
                taskname={task.name}/>
            )}
            
            
        </div>
        <Button color="" textColor="text-pblue" text="Load more..." ring="border-2 border-pblue" onClick = {handleAddTask}/> 
        
        </>
    )
}

export default MainContainer