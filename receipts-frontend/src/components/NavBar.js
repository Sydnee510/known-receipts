import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
   
    render(){
        return (    
        <div>
            <ul>
                <li><Link to="/">Home Page </Link></li>
                <li><Link to="/background">Kamala's Background</Link></li>  
                <li><Link to="/myths">Rumors </Link></li> 
                <li><Link to="/myths/new">+Rumor </Link></li> 
            </ul>   
        </div>
        )
    }
}

export default NavBar