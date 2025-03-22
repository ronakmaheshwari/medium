import { ChangeEvent } from "react";

interface InputBoxType{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string;
    // value:string;
}

export const InputBox = ({label,placeholder,onChange,type}:InputBoxType) =>{
    return(
        <div className="w-[300px] space-y-1">
            <label className="block mb-2 text-sm font-semibold text-black pt-2">{label}</label>
            <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-3" placeholder={placeholder} onChange={onChange} required />
        </div>
    )
} 