import React ,{useState,useEffect}from 'react'
import ALbumList from './albumList'
import useFetch from './useFetch'
// import AlbumList from './albumList'

const Albums=()=> {
    

    // const [albums,setAlbums]=useState(null)
    //     {
    //         "userId":1,
    //         "id":24,
    //         "title":"quant issie"
    //     },
    //     {
    //         "userId":1,
    //         "id":23,
    //         "title":"eseq"
    //     },
    //     {
    //         "userId":1,
    //         "id":30,
    //         "title":"hieakuie"
    //     },
    //     {
    //         "userId":2,
    //         "id":14,
    //         "title":"qui fuga"
    //     },
    //     {
    //         "userId":3,
    //         "id":67,
    //         "title":"distinctio"
    //     },
    //     {
    //         "userId":4,
    //         "id":89,
    //         "title":"ab rerum non rerum "
    //     },
    //     {
    //         "userId":5,
    //         "id":16,
    //         "title":"dolores"
    //     },
    //     {
    //         "userId":7,
    //         "id":90,
    //         "title":"quant issie"
    //     },
    //     {
    //         "userId": 4,
    //         "id": 36,
    //         "title": "nihil cupiditate voluptate neque"
    //       },
    //       {
    //         "userId": 4,
    //         "id": 37,
    //         "title": "est placeat dicta ut nisi rerum iste"
    //       }    
    // ])
    const handleDelete=(id)=>{
        const newAlbums=data.filter(album=>album.id !== id)
        
        setData(newAlbums)
    }
    // const [loading,setLoading]=useState(true)
    // const[error,setError]=useState('')
const[name,setName]=useState('piaa')
//     useEffect(()=>{
//         console.log('use affect run')
// console.log(name)
//         },[name])

// useEffect(()=>{
//     setTimeout(()=>{
//     fetch('http://localhost:3000/albums')
//     .then(res => {
//         if(!res.ok){
// throw  Error('error in fetching')
//         }
//         return res.json()
//     })
//     .then((data) => {console.log(data)
//         setLoading(false)   

//     setAlbums(data)
//     setError('')
// })
// .catch((err)=>{
//     console.log(err.message)
//     setLoading(false)
//     setError('data fetching error')
// })
//     },2000)
// },[])

   const {data,loading,error,setData}=useFetch('http://localhost:3000/albums') 
  return (
    <div className="home">
    {/* {
        albums.map((album)=>{
            <div className="home-preview" key={album.id}>
                <h2>{album.title}</h2>
                <h3>{album.userId}</h3>
            </div>
        })
    }   */}
    {error && <div>{error }</div>}
    {loading && <div>Loading .....</div>}
{   data && <ALbumList data={data} title="All albums here" handleDelete={handleDelete}/>}   
 {/* <AlbumList albums={albums.filter((album)=> album.userId=== 4)} title="userId 1's info " handleDelete={handleDelete}/> 
    <button onClick={()=>setName('viny')}> change name</button>
    <p>{name}</p> */}
    </div>
  )
}

export default Albums
