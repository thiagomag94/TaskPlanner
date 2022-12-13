
import { ReactElement } from "react";
import Image from "next/image"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';



const Footer = () => {
    return(

       <div className="w-full h-20 bg-zinc-200  absolute bottom-0 flex flex-col justify-center items-center ">
         <AddCircleRoundedIcon sx={{fontSize:70}} className="absolute -top-12 text-pgreen rounded-full drop-shadow-lg"/>
       </div>
    )
}

export default Footer