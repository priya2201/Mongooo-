import React ,{useState,useEffect} from 'react'


const useFetch=(url)=>{
    const [data,setData]=useState(null)
        const [loading,setLoading]=useState(true)
    const[error,setError]=useState('')


    useEffect((url)=>{
        setTimeout(()=>{
        fetch('http://localhost:3000/albums')
        .then(res => {
            if(!res.ok){
    throw  Error('error in fetching')
            }
            return res.json()
        })
        .then((data) => {console.log(data)
            setLoading(false)   
    
        setData(data)
        setError('')
    })
    .catch((err)=>{
        console.log(err.message)
        setLoading(false)
        setError('data fetching error')
    })
        },2000)
    },[url])
    return{data,loading,error,setData}
}
export default useFetch