import ButtonPropType from "./type"


const Button = (props:ButtonPropType) =>{

    const {color, textColor, text, ring, onClick} = props
    return(
        <button className={`${color} ${textColor} ${ring} rounded-full w-30 mt-24 px-4 py-2 absolute bottom-48`} onClick = {onClick}>{text}</button>
    )
}

export default Button