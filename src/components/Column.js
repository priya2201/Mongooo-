import React from 'react'

function Column() {
    const items=[{id:1,title:'pia'},{is:2,title:'vina'}]
  return (
    <React.Fragment>
        {
            items.map(item =>(
                <React.Fragment key={item.id}>
<h1>title</h1>
<p>{item.title}</p>
</React.Fragment>

            ))
        }
      <td>Name</td>
      <td>Piyu</td>
    </React.Fragment>
  )
}

export default Column
