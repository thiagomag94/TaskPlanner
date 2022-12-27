import { ReactElement } from "react"
import { TaskPropsType } from "./type";





const Tasks = (props: TaskPropsType) => {

    const {onDeletetask, taskname, colorBg, status} = props
    return(
        <div id="content" className={`w-11/12 min-h-4 flex items-center  ${colorBg} rounded-sm mb-1 relative p-2 lg:w-2/5`}>
           
            <div id="div-comment " className="w-full flex items-center">
                <div className="w-10 h-full flex items-center">
                    <input type="checkbox" name="marcado" id="check01" className=" w-4 h-4  border-2 border-pblue appearance-none checked:bg-pgreen checked:appearance " />
                </div>
                <p className="w-full text-xs text-neutral-800 font-light h-full">
                    {status === false ? <span className="text-red-500 mr-2">NÃO FINALIZADA -</span>
                    : <span className="text-green-800 mr-2">FINALIZADA - </span>}
                    {taskname}
                </p>
                <span onClick={onDeletetask} className="w-10  justify-center flex items-center  text-lg  text-neutral-800 opacity-40 cursor-pointer">&times;</span>
                
            </div>
        </div>
    )

}
                

export default Tasks