import React from 'react' 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteMyth} from '../actions/deleteMyth'
import SearchBar from './SearchBar'
 
const Myths = (props) => {
    const handleDelete = (myth) => {
        props.deleteMyth(myth.id)
        .then(window.location.reload(false))
        alert("Are you sure you want to delete this myth?")
    }
//console.log(props.searchResults)
     const getMyths = () => {
        if (props.searchResults !== undefined && props.searchResults.length > 0) {
            props.myths = props.searchResults
            return props.myths
        } 
        else {
            return props.myths
        }
        
    }
    console.log(props.myths)
    
    const showResults = getMyths().length > 0 ? 
        getMyths().map((r, i) =>  (<div className="myths" key={i}>
            <li><Link key={r.id} to={`/myths/${r.id}`}>{r.false_content}</Link><button onClick={()=> handleDelete(r)}>delete</button></li></div>)) : <p>This is myRecipes with an empty array of recipes</p>
        
    return (
        <div>
            <SearchBar/>
            <h3>False Content:</h3>
            {showResults}
        </div>
    )
}

export default connect(null, {deleteMyth})(Myths)