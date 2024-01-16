import React from 'react'
import './Sidebar.css'

const Sidebar = (props) => {
  return (<>
    <div className='sidebar'>

<ul>
        <li><a href="#about">{props.title}</a></li>
          <li><a href="#contact">{props.name}</a></li>
         
          <li><a href="#write for us">{props.about}</a></li>
        
          <li><a href="#sign out">{props.signout}</a></li>
        </ul>
    </div>
    </>
  )
}

export default Sidebar
