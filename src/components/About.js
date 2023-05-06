import React ,{useState} from 'react'
import { useHistory } from 'react-router-dom'
const About =()=>{
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const [author,setAuthor]=useState('piya')
  const [isPending,setIspending]=useState(false)
  const history=useHistory();
  const handleSubmit=(e)=>{
    e.preventDefault()
    const blog={title,body,author}
    setIspending(true)
    console.log(blog)
    fetch('http://localhost:8000/comments',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(blog)
    }).then(()=>{
      console.log('add new blog')
      setIspending(false)
      // history.go(-1)
      history.push('/contact')
    })
  }

    return (
      <div className="create">
        <h1> About - a new blog</h1>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input type="text" required value={title}
          onChange={(e)=>setTitle(e.target.value)}/>
          <label>Blog body:</label>
          <textarea required value={body}
          onChange={(e)=>setBody(e.target.value)}></textarea>
          <label>Blog author:</label>
          <select value={author}
onChange={(e)=>setAuthor(e.target.value)}>
            <option value="piya">piya</option>
            <option value="vina">vina</option>
          </select>
{    !isPending    &&  <button>Add blog </button>}
{ isPending && <button disabled>Adding blog....</button>}
          <p>{title}</p>
          <p>{body}</p>
          <p>{author}</p>
        </form>
      </div>
    )
  }


export default About
