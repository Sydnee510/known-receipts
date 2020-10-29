import React from 'react' 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteMyth} from '../actions/deleteMyth'
 
const Myths = (props) => {
    const handleDelete = (myth) => {
        props.deleteMyth(myth.id)
        .then(window.location.reload(false))
        alert("Are you sure you want to delete this myth?")
    }

    console.log(props.myths)

    return (
        <div>
            <h3>False Content:</h3>
            {props.myths.map(myth => 
            
                <li className="myths" key={myth.id}>
                    <Link to={`/myths/${myth.id}`}>{myth.false_content}</Link> <button onClick={()=> handleDelete(myth)}>delete</button>
                </li>)}
                
        </div>
    )
}

export default connect(null, {deleteMyth})(Myths)