import React from 'react'
import {Link} from 'react-router-dom'
const NotFound=()=>{
    return(<div className="not-found">
<h1>Page not found</h1>
<p>the following page is not having right route </p>
   <Link to="/"   >Back to home page.....</Link></div>
)
}
export default NotFound