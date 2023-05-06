import React,{useState,useEffect} from 'react'
import CommentList from './CommentList'
import useFetchComment from './useFetchComment'
const LoadingFromComment=()=>{
//   const [comments,setComments]=useState(null)  
//   const [isPending,setIsPending]=useState(true)
//   const [error,setError]=useState(null)


//   useEffect(()=>{
//     setTimeout(()=>{
// fetch('http://localhost:8000/comments')
// .then((res)=>{
//     if(!res.ok){
//         throw Error('errors here ')
//     }
//     console.log(res)
//     return res.json()
// }).then((data)=>{
//     setComments(data)
//     setIsPending(false)
//     setError(null)
// }).catch(err=>{
//     setIsPending(false)
//     setError(err.message)
// })
//     },2000)
//   })
const{data:comments,isPending,error}=useFetchComment('http://localhost:8000/comments')
  return(
<div>
{error && <div>{error}</div>}
{isPending && <div>Loading!...........</div>}
{comments && <CommentList comments={comments} title="all comments" />}
</div>
  )
}

export default LoadingFromComment