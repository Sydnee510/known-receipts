import React from 'react' 
import Myth from './Myth'

const Myths = (props) => {
console.log(props)
    return (
        <div>
            <h3>False Content:</h3>
            {props.myths.map(myth => 
            <div key={myth.id}><Myth myth={myth}/></div>)}
        </div>
    )

}

export default Myths