import React,{useState,useEffect} from 'react'
import { Table ,Button} from 'semantic-ui-react'
import axios from 'axios'
import {Link} from 'react-router-dom'


function Read() {
    const [APIData,setAPIData]=useState([])
    const getData=()=>{
        axios.get(`https://6455de282e41ccf1690e967f.mockapi.io/fakeData`)
        .then((getData)=>{
            setAPIData(getData.data)
        })
    }
    const onDelete=(id)=>{
       axios.delete(`https://6455de282e41ccf1690e967f.mockapi.io/fakeData/${id}`) 
       .then(()=>{
getData();
       })
    }

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)

        console.log(data);
     }
     

    // useEffect(() => {
    //     axios.get(`https://6455de282e41ccf1690e967f.mockapi.io/fakeData`)
    //         .then((response) => {
    //             setAPIData(response.data);
    //         })
    // }, [])

    useEffect(() => {
        getData();
      }, []);
    
  return (
    <div>
                            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data)=>{
                        return (
                            <Table.Row>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Checked' :'Unchecked'}</Table.Cell>
                            <Link to='/update'>
  <Table.Cell> 
     <Button onClick={()=>setData(data)}>Update</Button>
   </Table.Cell>
   <Table.Cell>
    <Button onClick={()=>onDelete(data.id)}>Delete</Button>
   </Table.Cell>
</Link>
                        </Table.Row>
                        )
                    })}



</Table.Body>


            </Table>


    </div>
  )
}

export default Read
