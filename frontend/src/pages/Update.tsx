// import { useEffect, useState } from "react";
// import { Heading } from "../components/Heading";
// import { InputBox } from "../components/InputBox";
// import axios from "axios";

// export default function UpdateProfile(){
//     const [name,setName] = useState("")
//     const [email,setEmail] = useState("")
//     const [password,setPassword] = useState("")
//     useEffect(()=>{
//         async function handle() {
//             const response = await axios.get("");
//         }
//     })

//     return(
//         <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-1 space-y-2 flex flex-col justify-start items-center ">
//             <Heading title="Create" />
//             <div className="flex flex-col justify-start items-center p-3 w-full h-full">
//                 <InputBox label="Username" placeholder="Username" onChange={()=>{}} type="text" />
//             </div>
//         </div>
//     )
// }