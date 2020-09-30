import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchMyths} from '../actions/fetchMyths'
import Myths from '../components/Myths'
import Myth from '../components/Myth'
import MythInput from '../components/MythInput'
import NavBar from '../components/NavBar'
import HomePage from '../components/Homepage'
import BackGround from '../components/Background'

class MythsContainer extends React.Component {
    componentDidMount () {
          this.props.fetchMyths()
    }

    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/background" component={BackGround} />
                <Route path='/myths/new' component={MythInput}/>
                <Route path='/myths/:id' render={(routerProps) => <Myth {...routerProps} myths={this.props.myths}/>}/>
                <Route path='/myths' render={(routerProps) => <Myths {...routerProps} myths={this.props.myths}/>}/> 
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
export default connect(mapStateToProps, {fetchMyths})(MythsContainer)