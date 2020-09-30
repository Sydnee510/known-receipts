import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MythsContainer from '../containers/MythsContainer'
import HomePage from './Homepage'
import BackGround from './Background'
import MythInput from './MythInput'

import {connect} from 'react-redux'

class NavBar extends React.PureComponent {
    componentDidMount(){
    }
    
    render(){
        return (    
        <div>   
        <Switch>
            <Route  exact path="/" component={HomePage} />
            <Route  path="/myths" component={MythsContainer} />
            <Route  path='/myths/new' component={MythInput} />
            <Route  path="/background" component={BackGround} />
        </Switch>
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