import { Body } from "../components/Body"
import { Footer } from "../components/Footer"
import { Msg } from "../components/Msg"
import { Nav } from "../components/Nav"

export const Dashboard = ()=>{
    return(
        <div className="bg-primary h-full w-full min-h-screen flex flex-col justify-between"> 
            <Nav/>
            <Msg/>
            <Body/>
            <Footer/>
        </div>
    )
}