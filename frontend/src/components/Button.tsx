import { MouseEventHandler } from "react"

interface ButtonType{
    title:string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({onClick,title}:ButtonType)=>{
    
    return(
        <button type="button" className="w-80 p-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-5" onClick={onClick}>{title}</button>
    )
}