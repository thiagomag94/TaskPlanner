
import Link from "next/link"
import { HeaderPropType } from "./type"


export default function Header(props:HeaderPropType){

    const {text} = props
    return(
        <header className='w-11/12 flex  justify-between items-center  text-pblue'>
            <p>{text}</p>
            <Link href={{pathname:'dashboard'}}><span className='text-4xl'>&#215;</span></Link>
        </header>


    )
}