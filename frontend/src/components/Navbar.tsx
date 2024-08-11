import { Link } from "react-router-dom"
import { BtnBlack } from "./BtnBlack"
import { useNavigate } from "react-router-dom";

export const Navbar = ()=>{
    
    const navigate = useNavigate();
    const handleSignout = () => {
      localStorage.removeItem("token");
      navigate('/');
      alert("You are loged--out ....")
    };
    return(
        <div>
            <nav className=" bg-primary navbar navbar-expand-lg navbar-light flex justify-between items-center h-15 border-b-2">
                <Link to={'/blogs'}>
                    <div className="flex gap-0">
                        <img className="h-8" src="/logo.jpg" alt="logo" />
                        <p className="text-2xl font-semibold">Medium</p>
                    </div>
                </Link>
                <div className="flex items-center gap-0">
                    <Link to={'/publish'}>
                        <BtnBlack label={'Publish'} />
                    </Link>
                    <button onClick={handleSignout} className="h-10  font-medium2 border rounded-full font-bold pl-5 pr-5 bg-black text-white">LogOut</button>
                </div>
            </nav>
        </div>
    )
}