import { Link, useNavigate } from "react-router-dom"
import { Inputs } from "./Inputs"
import { useState } from "react"
import { SignupInput } from "@soumithvardhan/medium-commonresource"
import axios from "axios"
import { BACKEND_URL } from "../config"


export const Auth = ({type}:{type:'signin'|'signup'})=>{
    const navigate = useNavigate();
    const  [postInputs, setPostInputs ] = useState<SignupInput>({
        email :"",
        password:"",
        name:""
    })

    const handleSubmit = async() => {
      try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
        const jwt = response.data.jwt;
        localStorage.setItem("token", jwt);
        navigate("/blogs");
        
      } catch (error) {
        alert("error while signing up");
      }
    };

    return(
        <div className=" text-center flex flex-col justify-center items-center gap-10 h-full">
            <div>
             <h1 className="text-4xl font-bold mt-32 md:mt-0">Create an Account</h1>
             <p className="font-semibold mt-5">
                {type === "signin" ? "Don't have an account?": "Already have an account?"} 
                <Link to={ type === 'signin' ? "/signup" : '/signin' }>
                    {type === "signin" ? "Sign up":"Sign in"}
                </Link>
             </p>
            </div>

            <div className="flex flex-col gap-5 items-center">
             { type ==="signup" ? <Inputs label='Enter your user name' text='Username' type='text' onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    name:e.target.value
                })

             }}/> :null } 

             <Inputs label='Sush@gmail.com' text='Email' type='email' onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    email:e.target.value
                })
             }}/>

             <Inputs label='123456' text='Password' type='password' onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    password:e.target.value
                })
             }}/>

             <button onClick={handleSubmit} className="h-10 w-52   font-medium2 border rounded-full font-bold pl-5 pr-5 bg-black text-white">{type === "signup" ? "Sign up" : "Sign in"}</button>
            </div>
            

        </div>
    )
} 