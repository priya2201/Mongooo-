import React,{useState,useEffect} from 'react'
import BlogList from './BlogList'

// function HomeComp() {
//   return (
//     <div>
//       <h1>Home comp</h1>
//     </div>
//   )
// }

const HomeComp=()=>{
    const [blogs,setBlogs]=useState(null)
    // ([
    //    {title:'new website',body:'data is fetching',author:'tashi',id:1} ,
    //    {title:'old website',body:'process is fetching',author:'tani',id:2},
    //    {title:'remake new website',body:'bigdata is fetching',author:'taisha',id:3} 
    // ]);

    const[name,setName]=useState('pia')

    const handleDelete=(id)=>{
const newBlogs =blogs.filter(blog => blog.id !== id) 
setBlogs(newBlogs)
    }

    useEffect(()=>{
        // console.log('use affect run')
        // console.log(name)
        fetch('http://localhost:8000/blogs')
        .then(res=>res.json())
        .then((data)=>{
            setBlogs(data)
        })
    },[])

return(
    <div className="home">
      {/* {blogs.map((blog)=>(
<div className="blog-preview" key={blog.id}>
    <h2>{blog.title}</h2>
    <p> Written by {blog.author}</p>
</div>
      ))} */}
      {blogs && <BlogList blogs={blogs} title="helloo all!" handleDelete={handleDelete}/>}
      {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'taisha')} title="taisha blog" handleDelete={handleDelete}/>
      <button onClick={()=>{setName('vina')}}>Click me</button>
      <p>{name}</p> */}
    </div>
)
        

}
export default HomeComp
