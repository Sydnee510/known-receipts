import React from 'react' 

const Myths = (props) => {
console.log(props)
    return (
        <div>
            <h3>False Content:</h3>
            {props.myths.map(myth => <li key={myth.id}>{myth.false_content}</li>)}
        </div>
    )

}

export default Myths