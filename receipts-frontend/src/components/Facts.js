import React from 'react'
import LikeButton from './LikeButton'
const Facts = (props) => {

    return (
        <div>
            {props.facts && props.facts.map(fact => 
            <li key={fact.id}>{fact.true_content} - <a href={fact.receipt_url}>Receipt</a>
            <LikeButton />
            </li>
            )}
        </div>
    )
}

export default Facts