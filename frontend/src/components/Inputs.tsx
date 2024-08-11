import { ChangeEvent } from "react"

export const Inputs =({label,text,type,onChange}:{label:string,text:string,type:string,onChange:(e:ChangeEvent<HTMLInputElement>)=>void})=>{
    return(
        <div className=" w-96 flex items-center justify-center flex-col text-start">
          <div className="flex flex-col gap-2"> 
            <p className="text-xl ">{text}</p>
            <input onChange={onChange} className="h-10 w-80  rounded-md pl-5 border ring ring-gray-100 ring-offset-0 text-lg" type={type} placeholder={label}/>
          </div>
        </div>
    )
}