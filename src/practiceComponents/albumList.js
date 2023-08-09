
// const AlbumList=(props)=>{
    const AlbumList=({data,title,handleDelete})=>{

    const heading={
        fontSize:'50px',
        color:'blue'
    }
    const headingh2={
fontSize:'30px',
color:'yellow'
    }
    // const albums=props.albums
    // const title=props.title
    // const handleDelete=props.handleDelete
    // console.log(props,albums)
    return(
        <div className="blog-list">
            <h1 style={heading}>{title}</h1>
             {
        data.map((data) => (
            <div className="home-preview" key={data.id}>
                <h2 style={headingh2}>{data.title}</h2>
                <h3>Is having this UserId {data.userId}</h3>
                <button onClick={()=> handleDelete(data.id)}>Delete Album</button>
            </div>
        ))
    }     
        </div>
    )
}

export default  AlbumList