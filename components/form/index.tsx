import Link from "next/link";
import Button from "../button";


export default function Form (){
    return(
        <>
        <form action="" method="post" className="w-4/5 text-white flex flex-col justify-center items-center mt-64">
            <label htmlFor="" className="self-start text-neutral-700">Tittle</label>
            <input type="text" name="" id="" placeholder="Type task title" className="outline-none text-zinc-800 mb-8 w-full rounded-md border-2 border-pgreen p-4"/>
            <label htmlFor="" className="self-start text-neutral-700" >Description</label>
            <input type="text" name="" id="" placeholder = "Type Task Description" className="outline-none text-zinc-800 mb-8 w-full rounded-md border-2 border-pgreen p-4" />
            <label htmlFor="" className="self-start text-neutral-700">Date end</label>
            <input type="" name="" id="" placeholder = "Click to choose date" className="outline-none text-zinc-800 mb-8 w-full rounded-md border-2 border-pgreen p-4" />
            <div id="buttons" className="flex w-full justify-between mt-8 px-2">
                <button className="w-28 bg-pblue text-slate-200 rounded-full p-2">Add</button>

                <Link href={{pathname:'/dashboard'}}>
                    <button className="w-28 bg-red-500 text-slate-200 rounded-full p-2">Cancel</button>
                </Link>
            </div>
        </form>
        </>
    )
}