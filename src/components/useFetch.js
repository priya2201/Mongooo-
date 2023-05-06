import React,{useState,useEffect} from 'react'
import BlogList from './BlogList'
const useFetch=(url)=>{
    const abortCont=new AbortController();
    const[data,setData]=useState(null)
    const[isPending,setIsPending]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        setTimeout(()=>{
        fetch(url,{signal:abortCont.signal})
        .then(res => {
            console.log(res)

            if(!res.ok){
throw Error('could not fetch the data for that resource')
            }
            return res.json()})
        .then((data)=>{setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err =>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
            // console.log(err.message)
            setIsPending(false)
            setError(err.message)
            }
        })
    },2000)
    return()=>abortCont.abort()
    },[url])
    return {data,isPending,error}
}

export default useFetch