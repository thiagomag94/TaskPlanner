
const HeaderTask = () =>{
    return(
        <div id="content" className="w-11/12 min-h-4 flex  bg-pblue rounded-md mb-4 relative p-2 lg:w-2/5">
            
            <div id="div-comment" className="w-full flex   justify-start items-center">
                <input type="checkbox" name="marcado" id="checkHeader" className="default:bg-pgreen " />
                <p className="text-neutral-800 font-normal ml-6">Name</p>
            </div>
        </div>  
    )
}

export default HeaderTask