import axios from "axios"
import { ApiError } from "next/dist/server/api-utils"

export default async function  GetDataTask(page:number, setListTasks:any, setCountTasks:any, ListTasks:any){
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