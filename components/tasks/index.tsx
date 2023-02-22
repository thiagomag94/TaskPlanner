import { useState, ReactElement,useContext, useEffect } from "react"
import { TaskPropsType } from "./type";
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import EditIcon from '@mui/icons-material/Edit';
import { ContextData } from "../../contexts/TaskContext";





const Tasks = (props: TaskPropsType) => {

    const {onDeletetask, taskname, colorBg, status, description} = props
    const [visibility, setVisibility] = useState<boolean>(false)
    const [ListTasks, setListTasks, countTasks, setCountTasks] = useContext<any>(ContextData)
    
    useEffect(()=>{
       
        console.log(ListTasks)
    },[ListTasks]

    )
    const handleExpandTask = () => {
        visibility === false ? setVisibility(true) : setVisibility(false)
        console.log('expand true')

    }

    const handleUpdate = () => {
            const updatedArray = ListTasks.map(item => {
              if (item.todo === taskname) {
                if(item.completed === true){
                    return { ...item, ...{completed:false}};
                }
                else if(item.completed === false){
                    
                    return { ...item, ...{completed:true}};
                }

                
              }
              return item;
            });
            console.log(updatedArray)
            setListTasks(updatedArray);

          }
        
    

    return(
        <div id="content" className={`w-11/12 min-h-4 flex flex-col gap gap-2 items-center  ${colorBg} rounded-sm mb-1 relative p-2 lg:w-2/5`}>
           
            <div id="div-comment " className="w-full flex items-center">
                <div className="w-10 h-full flex items-center">
                    <input type="checkbox" name="marcado" id="check01" className=" w-4 h-4  border-2 border-pblue rounded-full appearance-none checked:bg-pgreen checked:appearance " onClick={handleUpdate}/>
                </div>
                <p className="flex items-center w-full text-md text-white font-normal h-full overflow-x-hidden">
                    {status === false ? <ErrorIcon className="text-red-500 mr-2"></ErrorIcon>
                    : <div className="text-md rounded-sm text-emerald-600  mr-2">
                        <CheckCircleIcon/> 
                        
                    </div> }
                    {taskname}
                </p>
                <div  className="w-16  justify-center flex items-center gap gap-1 text-white opacity-80  cursor-pointer">
                    {visibility === true ?    <ExpandLessIcon onClick={handleExpandTask} className="hover:opacity-40" fontSize="small"/>
                     : <ExpandMoreIcon onClick={handleExpandTask} className="hover:opacity-40" fontSize="small"/>}
                    <EditIcon></EditIcon>
                    <DeleteIcon onClick={onDeletetask} className="hover:opacity-40" fontSize="small"/>
                    
                </div>
                
            </div>
            {visibility === true && <div id="task-description" className= "w-full h-92 font-light py-2 px-8 border-t"> 
                <p className="text-xs mb-4">{description}</p>
                <div className="flex justify-around bg-white w-fit rounded-sm text-emerald-600 py-1 px-1">
                 {status === true && 
                 <>
                    <CheckCircleIcon className="mr-1"/> 
                    <p>Finished</p>
                 </>
                 }
                 {status === false && 
                 <>
                    <ErrorIcon className="text-red-500 mr-1"/> 
                    <p className="text-red-500">Not finished</p>
                 </>
                 }

                </div>
            </div>}
            
        </div>
    )

}
                

export default Tasks