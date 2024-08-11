export const Footer =()=>{
    return(
        <div className="flex gap-5 h-15 justify-around items-center border border-black">
            <div className=" flex gap-5 text-[#6B6B6B] " >
                <a href=""><p>Help</p></a>
                <a href=""><p>Status</p></a>
                <a href=""><p>About</p></a>
                <a href=""><p>Careers</p></a>
                <a href=""><p>Press</p></a>
                <a href=""><p>Blog</p></a>
                <a href=""><p>Privacy</p></a>
                <a href=""><p>Terms</p></a>
                <a href=""><p>Text to speech</p></a>
                <a href=""><p>Teams</p></a>
            </div>
            <div className="flex flex-col gap-0 text-xs md:text-sm md:gap-4 md:flex-row">
                <p>Designed By <span className="font-bold">Soumith Vardhan :) </span></p>
                <div className="flex gap-2">
                    <a href="https://www.instagram.com/_soumith_vardhan/"><img className="h-5" src="./instagram.webp" alt="insta" /></a>
                    <a href="https://www.linkedin.com/in/soumith-vardhan-b19998258/"><img className="h-5" src="./linkedin-logo.png" alt="linkedin" /></a>
                </div>
            </div>
           
        </div>
    )
}