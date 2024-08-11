import { Link } from "react-router-dom"

interface BlogCardPross{
    authorName: string,
    title: string,
    content: string | null;
    publishDate: string,
    id:number
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishDate

}:BlogCardPross)=>{
    
    const contentLength = content?.length ?? 0;
    const numberOfPages = Math.ceil(contentLength / 100);
    
    return(
        <Link to={`/blog/${id}`}>
            <div className="mt-5 w-80 h-52 lg:w-50 bg-primary overflow-hidden border-b-4 rounded-md hover:bg-secondary transition ease-in-out delay-150  duration-300 ">
                <div className="flex gap-1">
                    <Avator name={authorName}/>{authorName}.
                    <div className="font-thin">
                    {publishDate}
                    </div>
                </div>
                <div className="ml-0 flex-col object-cover gap-2 relative">
                    <div className="font-bold text-xl">
                        {title}
                    </div>
                    <div className="font-semibold">
                        {content ? content.slice(0, 100) : "No content available."}
                    </div>
                    <div className="absolute top-36 right-0">
                        <div className="bg-tertiary  border-black w-20 rounded-xl text-center font-thin">Pages: {numberOfPages} read</div>
                    </div>
                </div>
            </div>
        </Link>
        
    )
}

export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export const Avator =({name}:{name:string})=>{
    return (
        <div className="uppercase font-semibold">   
            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden  bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span></div>
        </div>
    )
}