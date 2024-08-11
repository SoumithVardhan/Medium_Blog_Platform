import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { Spinner } from "../components/Spinner";
import { FullBlog } from "../components/FullBlog";

export const Blog =()=>{

    const { id } = useParams();
    const {loading, blog} = useBlog({
        id:id || ""
    });
    
    if(loading || !blog){
        return(
            <div>
                <div className="h-screen flex flex-col justify-center">
                    <div className="flex justify-center">
                        <Spinner/>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="bg-primary">
            <FullBlog blog={blog} />
        </div>
    )
}