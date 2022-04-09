import { Button, Container, Box, Typography ,  } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <div className="notfound-main">
		      <div className="notfound">
			      <div className="notfound-404">
				      <h1>Oops!</h1>
				      <h2>404 - The Page can't be found</h2>
			     </div>
		 	    <Link to="/">Go To Homepage</Link>
		    </div>
       </div>
    </div>

 
  )
}

export default NotFound