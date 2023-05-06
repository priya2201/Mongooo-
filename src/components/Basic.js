import React ,{useState} from 'react'

const Basic=()=> {
    const [color,setColor]= useState("red")
    const [brand,setBrand]=useState("ford")
  return (
    <div>
      <h1>My favorite color is {color}</h1>
      <button type="button"
      onClick={()=>setColor('blue')}>
Blue
      </button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
  <p>my {color} is used this {brand} brand</p>
    </div>
  )
}

export default Basic
