import React from 'react'

const Facts = (props) => {

    return (
        <div>
            {props.facts && props.facts.map(fact => 
            <li key={fact.id}>{fact.true_content} - <a href={fact.receipt_url}>Receipt</a></li>
            )}
        </div>
    )
}

export default Facts