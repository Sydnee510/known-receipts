import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchMyths} from '../actions/fetchMyths'
import Myths from '../components/Myths'
import Myth from '../components/Myth'
import MythInput from '../components/MythInput'

class MythsContainer extends React.Component {
    componentDidMount () {
          this.props.fetchMyths()
    }

    render() {
        return (
            <div>
                <Route path='/myths/new' component={MythInput}/>
                <Route path='/myths/:id' render={(routerProps) => <Myth {...routerProps} myths={this.props.myths}/>}/>
                <Route exact path='/myths' render={(routerProps) => <Myths {...routerProps} myths={this.props.myths}/>}/> 
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