import React from 'react'
import {Redirect} from 'react-router-dom'
import FactsContainer from '../containers/FactsContainer'
const Myth = (props) => {
    //find by index
    //let myth = props.myths[props.match.params.id -1]
    //find by id
    let myth = props.myths.filter(myth => myth.id == props.match.params.id)[0]
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