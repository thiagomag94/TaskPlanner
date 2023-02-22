import ButtonPropType from "./type"


const Button = (props:ButtonPropType) =>{

    const {Loadmore, color, textColor, text, ring, colorHover, textHover, left, right} = props
    return(
        <button type = "button" onClick = {Loadmore} className={`${color} ${textColor} ${ring} ${colorHover} ${textHover} rounded-full w-28 mt-10 px-2 py-2 shadow-md ${left} ${right}`} >{text}</button>
    )
}

export default Button