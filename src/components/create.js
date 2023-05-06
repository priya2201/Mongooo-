import axios from 'axios'

import React, { useState } from 'react'

const Create=()=> {
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const [checkbox,setCheckbox]=useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://6455de282e41ccf1690e967f.mockapi.io/fakeData', {
            firstName,
            lastName,
            checkbox,
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
  return (
    <div>
     <form>
        <label>First Name</label>
        <input type="text" placeholder='Enter First Name' required onChange={(e)=> setFirstName(e.target.value)}/>
        <label>Last Name</label>
        <input type="text" placeholder='Enter Last Name' required onChange={(e)=> setLastName(e.target.value)}/>
        <label>
        <input type="checkbox" onChange={(e)=> setCheckbox(!checkbox)}/> I agree terms and conditions</label>
        <button onClick={handleSubmit} type="submit">Submit</button>
        </form> 

    </div>
  )
}

export default Create
