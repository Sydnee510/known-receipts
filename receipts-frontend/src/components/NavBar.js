import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class NavBar extends React.PureComponent {
    componentDidMount(){
    }
    
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

const mapStateToProps = state => {      
    return {
        myths: state.myths
    }
}

export default connect(mapStateToProps)(NavBar)