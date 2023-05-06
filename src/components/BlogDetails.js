import { useParams } from "react-router-dom"
import useFetchComment from "./useFetchComment";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const BlogDetails=()=>{
    const {id}=useParams();
    const {data:blog,error,isPending}=useFetchComment('http://localhost:8000/comments/'+id);
    const history=useHistory();
    const handleClick=()=>{
        fetch('http://localhost:8000/comments/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
history.push('/')
        })
    }
    return(
        <div className="blog-details">
            {/* <h2>Blog details - {id}</h2> */}
          {isPending && <div>Loading....</div>}  
          {error && <div>{error}</div>}
          {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleClick}>Delete</button>
        </article>
          )}
        </div>
    )
}
export default BlogDetails