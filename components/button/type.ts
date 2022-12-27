import React from "react"

interface ButtonPropType {
    Loadmore:() => void,
    color: string,
    textColor: string,
    text: string,
    ring: string,
    colorHover: string,
    textHover:string,
    left?:string,
    right?:string,
}

export default ButtonPropType