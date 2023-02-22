import '../styles/globals.css'
import {useState} from 'react'
import type { AppProps } from 'next/app'
import { createContext } from 'vm'
import { ContextData } from '../contexts/TaskContext'


export default function App({ Component, pageProps }: AppProps) {
  const [ListTasks, setListTasks] = useState<any>([])
  const [isColorBlue, setColorBlue] = useState(true)
  const [countTasks, setCountTasks] = useState(0)
  const [page, setPage] = useState<number>(4)
  const [status, setStatus] = useState<boolean>(false)
  return (
   <>
   <ContextData.Provider value={[ListTasks, setListTasks, countTasks, setCountTasks, page, setPage, status, setStatus]}>
      <Component {...pageProps} />
   </ContextData.Provider>
    
  
   </>
  )
}
