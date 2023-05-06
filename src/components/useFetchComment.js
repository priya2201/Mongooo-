import React,{useState,useEffect} from 'react'
import CommentList from './CommentList'
const useFetchComment=(url)=>{
    const [data,setData]=useState(null)  
    const [isPending,setIsPending]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        
        setTimeout(()=>{
    fetch(url)
    .then((res)=>{
        if(!res.ok){
            throw Error('errors here ')
        }
        console.log(res)
        return res.json()
    }).then((data)=>{
        setData(data)
        setIsPending(false)
        setError(null)
    }).catch(err=>{
        setIsPending(false)
        setError(err.message)
    })
        },2000)
      },[url])
      return{data,isPending,error}
}
export default useFetchComment