import React from 'react'
import FactsContainer from '../containers/FactsContainer'
const Myth = (props) => {
   
    let myth = props.myths.filter(myth => myth.id == props.match.params.id)[0]
    
    return (
        <div>
        <h3>
        {myth ? myth.false_content : null}
        </h3>
        <FactsContainer myth={myth}/>
        </div>
    )
}

export default Myth