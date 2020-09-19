import React from 'react'
import {Redirect} from 'react-router-dom'
import FactsContainer from '../containers/FactsContainer'
const Myth = (props) => {
    let myth = props.myths[props.match.params.id -1]
    return (
        <div>
        <h3>
            {/* {myth ? null : <Redirect to='/myths'/>} */}
       {myth ? myth.false_content : null}
        </h3>
        <FactsContainer myth={myth}/>
        </div>
    )



}

export default Myth