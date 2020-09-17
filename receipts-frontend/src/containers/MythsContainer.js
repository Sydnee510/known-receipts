import React from 'react'
import {connect} from 'react-redux'
import {fetchMyths} from '../actions/fetchMyths'
import Myths from '../components/Myths'
import MythInput from '../components/MythInput'

class MythsContainer extends React.Component {
    componentDidMount () {
          this.props.fetchMyths()
    }

    render() {
        return (
            <div>
                <MythInput/>
                <Myths myths={this.props.myths}/>
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