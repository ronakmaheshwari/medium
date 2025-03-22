import axios from "axios";
import { InputBox } from "./InputBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import Backend_Url from "../config";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';


export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();

    // const [postInputs, setPostInputs] = useState<SignupType>({
    //     email: "",
    //     password: ""
    // });

    const[email ,setEmail] = useState("");
    const[password,setPassword] = useState("");

    async function sendSignUp() {
        try {
            const response = await axios.post(`${Backend_Url}/api/v1/user/signup`, {email:email,password:password});
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
            toast.success('Signed-Up Successful', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "colored",
                transition: Bounce,
            });

        } catch(e) {
            toast.error('SignUp failed! Please try again.', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "colored",
                transition: Bounce,
            });
        }
    }

    async function sendSignin() {
        try {
            const response = await axios.post(`${Backend_Url}/api/v1/user/signin`, {email:email});
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            toast.success('Signed-In Successful', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "colored",
                transition: Bounce,
            });
            navigate("/blogs");
        } catch(e) {
            toast.error('SignIn failed! Please try again', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "colored",
                transition: Bounce,
            });
        }
    }
    
    return (
        <div className="flex flex-col justify-center min-h-screen px-4 items-center">
            <div className="flex flex-col w-[800px] h-[500px] justify-center items-center space-y-4">
                
                <div className="flex flex-col text-center">
                    <p className="text-3xl font-extrabold text-gray-900">{type === "signin" ? "Login To Your Account" : "Create An Account"}</p>
                    <p className="text-base font-medium text-slate-400">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                        <button  onClick={() => navigate(type === "signin" ? '/signup' : '/signin')} className="underline pl-2"> {type === "signin" ? "Sign Up" : "Sign In"} </button>
                    </p>
                </div>

                <InputBox 
                    label="Email" 
                    placeholder="ronak@gmail.com" 
                    type="text" 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                {type === "signin" ? null :  <InputBox 
                    label="Password" 
                    placeholder="Pass@123" 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                />}

                <div className="w-full flex justify-center">
                    <Button onClick={type === "signin" ? sendSignin : sendSignUp} title={type === "signin" ? "Sign In" : "Sign Up"} />
                </div>
            </div>
        </div>
    );
};
