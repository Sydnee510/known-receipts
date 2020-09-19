import React from 'react'

const Myth = (props) => {
    let myth = props.myths[props.match.params.id -1]
    return (
        <li>
         {/* {props.myth.false_content} */}
       {myth ? myth.false_content : null}
        </li>
    )



}

export default Myth