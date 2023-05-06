import React from 'react'
import {Link} from 'react-router-dom'
const CommentList=({comments,title,handleDelete}) =>{
    
    const heading={
        fontSize:'72px',
        color:'blue'
    }

    
return(
    
    <div className="head-2">
                        <h1 style={heading}>{title}</h1>

                {comments.map((comment)=> (
            <div className="head-1" key={comment.id}>
                <h2>{comment.title}</h2>
                <Link to={`/blogs/${comment.id}`}>

                <p>extensively used for {comment.body}</p>
                <h1>Written by {comment.author}</h1>
                </Link>
                {/* <button onClick={()=> handleDelete(comment.id)}>Delete blog</button> */}
            </div>
        ))}
    </div>
)
}

export default CommentList
