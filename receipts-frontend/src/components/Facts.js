import React from 'react'

const Facts = (props) => {

    return (
        <div>
            {props.facts && props.facts.map(fact => 
            <li key={fact.id}>{fact.true_content} - {fact.receipt_url}</li>
            )}
        </div>
    )
}

export default Facts