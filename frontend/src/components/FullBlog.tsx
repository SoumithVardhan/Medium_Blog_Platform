import { Blog } from "../hooks";
import { Avator } from "./Blogcard";
import { Msg } from "./Msg";
import { Navbar } from "./Navbar";

export const FullBlog = ({ blog }: {blog: Blog}) => {
    return <div className="bg-primary h-auto">
        <Navbar />
        <Msg/>
        <div className="grid grid-cols-1  md:grid-cols-2 text-justify p-4 ">
            <div className="w-31 pt-200 max-w-screen-xl pt-12 md:ml-24 lg:w-50">
                <div className="text-2xl font-bold md:text-6xl">
                    {blog.title}
                </div>
                
                <div className="text-slate-500 pt-2">
                    Post on 2nd December 2023
                </div>

                <div className="mt-5 md:text-xl">
                    {blog.content}
                </div>

            </div>

            <div className=" border-l-2 pl-5 overflow-hidden md:ml-72 invisible md:visible">
                <div className="text-slate-600 text-lg font-medium2">
                    Author Details..
                </div>
                <div className="flex w-69">
                    <div className="pr-4 flex flex-col justify-center">
                        <Avator name={blog.author.name || "Anonymous"}/>
                    </div>
                    <div>
                        <div className="text-xl font-bold">
                            {blog.author.name || "Anonymous"}
                        </div>
                        <div className="pt-2 text-slate-500">
                            Random catch phrase about the author's ability to grab the user's attention
                        </div>
                    </div>
                </div>  
            </div>
            
        </div>
    </div>
}