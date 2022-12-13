import { ReactElement } from "react"
import { TaskPropsType } from "./type";





const Tasks = (props: TaskPropsType) => {

    const {onDeletetask, taskname} = props
    return(
        <div id="content" className="w-11/12 min-h-4 flex  bg-zinc-200 rounded-md mb-4 relative p-2 lg:w-2/5 ">
            <span onClick={onDeletetask} className="absolute right-4  text-lg  text-neutral-800 opacity-40 cursor-pointer">&times;</span>
            <div id="div-comment" className="w-full flex   justify-start items-center">
                <input type="checkbox" name="marcado" id="check01" className="default:bg-pgreen " />
                <p className="text-neutral-800 font-normal ml-6">{taskname}</p>
            </div>
        </div>
    )

}
                

export default Tasks