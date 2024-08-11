import { Link } from "react-router-dom"

export const Body = () =>{
    return(
        <div className="flex gap-20 h-69 py-4 w-full md:h-21 overflow-hidden">
            <div className="ml-3 w-60 md:ml-56"> 
                <h1 className="text-8xl font-medium mt-24 ">Human <br />stories & ideas</h1>
                <p className="font-medium2 text-xl mt-5 mb-8 md:mb-16">A place to read, write, and deepen your understanding</p>
                <button className="h-10 w-52 font-medium2 border rounded-full font-bold pl-5 pr-5 bg-black text-white"><Link to={'/signin'}>Start Reading</Link></button>
            </div>
            <div className="overflow-clip  w-40 md:visible">
                <img className="h-25 w-97" src="./bg.png" alt="img" />
            </div>
        </div>
    )
}