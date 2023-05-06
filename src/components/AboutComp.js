import React, { useEffect, useState } from 'react'
import CommentList from './CommentList';


const AboutComp=()=> {
const [comments,setComments]=useState(null)
// ([
//     {title:'node net',body:'node is used for server side web applications',author:'code with pia',id:1},
//     {title:'Angular net',body:'angular is used for single page web applications',author:'code with vina',id:2},
//     {title:'react net',body:'react is used for single page web applications',author:'code with kunu',id:3},
//     {title:'mongo net',body:'mongo is used for database in vast',author:'code with sia',id:4},

// ]);
// const[name,setName]=useState('pia')
const handleDelete=(id)=>{
    const newComments=comments.filter(comment => comment.id !== id )
    setComments(newComments)
}

useEffect(()=>{
    // console.log('use affecr run')
    // console.log(comments)
    fetch('http://localhost:8000/comments')
    .then(res=>{
        res.json()
    }).then((data)=>{
// console.log(data)
setComments(data)
    })
},[])
return(
    <div className="head">
        {/* {comments.map((comment)=> (
            <div className="head-1" key={comment.id}>
                <h2>{comment.title}</h2>
                <p>extensively used for {comment.body}</p>
                <h1>Written by {comment.author}</h1>
            </div>
        ))} */}
{     comments &&   <CommentList comments={comments} title="Hello" handleDelete={handleDelete} /> }
        {/* <CommentList comments={comments.filter((comment)=> comment.author === 'code with vina')} title="hieee" handleDelete={handleDelete}/>
        <button onClick={()=>{setName('vina')}}>Click me !</button>
        <p>{name}</p> */} 
    </div>
)
}

export default AboutComp
