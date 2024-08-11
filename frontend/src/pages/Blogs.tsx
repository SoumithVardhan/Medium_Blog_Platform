import { BlogCard } from "../components/Blogcard"
import { Navbar } from "../components/Navbar"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";
import { Msg } from "../components/Msg";

export const Blogs = ()=>{
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div className="bg-primary">
            <Navbar /> 
            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }

    return(
        <div>
            <Navbar/>
            <Msg/>
            <div className=" bg-primary back flex flex-col justify-center items-center cursor-pointer">
                <div>
                    {blogs.map(blog => <BlogCard
                        id={blog.id}
                        authorName={blog.author.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishDate={"6th aug 2024"}
                    />)}
                </div>
            </div>
            
        </div>
        
    )
}