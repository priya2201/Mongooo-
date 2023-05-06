import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const DummyData=()=>{
const[data,setData]=useState([
    {title:'data uploading',developer:'pia',id:1},
    {title:'data processing',developer:'vina',id:2},
    {title:'data fetching',developer:'guddu',id:3},
    {title:'data unmounting',developer:'piyu',id:4},

])
return(
    <div className="app">
        {data.map((data)=>{
            return(
            <div className="app1" key={data.id}>
                <Link to={`/blogs/${data.id}`}>
                <h2>{data.title} </h2>
                <h2>Developer is {data.developer}</h2>
             </Link>
                </div>
            );
        })}
    </div>
)
}
export default DummyData