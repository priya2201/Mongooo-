import React ,{useState,useEffect}from 'react'

const Loader2=()=> {
    const[data,setData]=useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
            .then((response)=>response.json())
            .then((data)=>setData(data))
            .catch((error)=>console.error(error))
        },2000)
    },[])
  return (
    <div>
      {data ? (
        <ul>
            {data.map(item =>(
                <li key={item.id}>{item.author}  {item.id}</li>
            ))}
        </ul>
      ):(
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Loader2
