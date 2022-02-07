import React from "react";
import {Link} from 'react-router-dom'
const notFound =()=>(
    <div>
        <h1>Page Not Found</h1>
        <h3><Link to='/'>Go to Homepage</Link></h3>
     </div>
)
export default notFound;