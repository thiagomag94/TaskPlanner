import { ReactElement } from "react"

export interface TaskPropsType {
    onDeletetask: () => void,
    taskname: string,
    colorBg: any,
    status: boolean,
    description:string
   
}