import React from 'react'
import FactsInput from '../components/FactsInput'
import Facts from '../components/Facts'

class FactsContainer extends React.Component {

    render() {
        return (
        <div>
            <FactsInput myth={this.props.myth}/>
            <Facts facts={this.props.myth && this.props.myth.facts}/>
        </div>)
    }
}
export default FactsContainer