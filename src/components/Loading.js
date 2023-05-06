import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Loading=()=> {
    // const[blogs,setBlogs]=useState(null)
    // const[isPending,setIsPending]=useState(true)
    // const [error,setError]=useState(null)

//     useEffect(()=>{
//         setTimeout(()=>{
//         fetch('http://localhost:8000/blogs')
//         .then(res => {
//             console.log(res)

//             if(!res.ok){
// throw Error('could not fetch the data for that resource')
//             }
//             return res.json()})
//         .then((data)=>{setBlogs(data)
//             setIsPending(false)
//             setError(null)
//         })
//         .catch(err =>{
//             // console.log(err.message)
//             setIsPending(false)
//             setError(err.message)
//         })
//     },2000)
//     },[])

const{data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs')
  return (
    <div>
        {error && <div>{error}</div>}
      {isPending && <div>loading ....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  )
}

export default Loading
