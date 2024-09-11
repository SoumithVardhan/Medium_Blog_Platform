import { Button } from "./Button"
import { Link } from "react-router-dom"
export const Nav = () =>{
    return(
        <div>
            <div className=" bg-primary navbar navbar-expand-lg navbar-light flex justify-between items-center h-20 border-b-1 px-16">
                <h1><a href="" className="p-1 text-2xl font-bold font-medium md:text-5xl">Medium</a></h1>
                <div className="flex items-center gap-0">
                    <div className="">
                        <Link className="grid grid-cols-2 invisible md:visible " to={'/signin'}>
                                <Button label="Write"/>
                                <Button label="Signin"/>
                        </Link>
                        </div>
                        <div className="" >
                            <button className="h-10 w-30 md:w-59 font-medium2 border rounded-full font-bold pl-5 pr-5 bg-black text-white"><Link to={'/signup'}>Get Started</Link></button>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}