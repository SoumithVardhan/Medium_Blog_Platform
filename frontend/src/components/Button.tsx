export const Button = ({ label }:{ label:string })=>{
    return(
        <button className="h-5 border rounded-full font-bold pl-5 pr-5 md:h-10 text-sm">{label}</button>
    )
}