import React from 'react' 
import {Route, Link} from 'react-router-dom'
import Myth from './Myth'

const Myths = (props) => {
console.log(props)
    return (
        <div>
            <h3>False Content:</h3>
            {props.myths.map(myth => 
                <li key={myth.id}>
                    <Link to={`/myths/${myth.id}`}>{myth.false_content}</Link>
                </li>)}
        </div>
    )

}

export default Myths