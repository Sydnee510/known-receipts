import React from 'react' 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteMyth} from '../actions/deleteMyth'

const Myths = (props) => {
    const handleDelete = (myth) => {
        props.deleteMyth(myth.id)
    }
console.log(props)
    return (
        <div>
            <h3>False Content:</h3>
            {props.myths.map(myth => 
                <li key={myth.id}>
                    <Link to={`/myths/${myth.id}`}>{myth.false_content}</Link> <button onClick={()=> handleDelete(myth)}>delete
        </button>
                </li>)}
        </div>
    )

}

export default connect(null, {deleteMyth})(Myths)