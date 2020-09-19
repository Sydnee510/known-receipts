import React from 'react'
import FactsInput from '../components/FactsInput'
import Facts from '../components/Facts'
import Myth from '../components/Myth'
class FactsContainer extends React.Component {

    render() {
        return (
        <div>
            <FactsInput/>
            <Facts facts={this.props.myth && this.props.myth.facts}/>
        </div>)
    }



}
export default FactsContainer