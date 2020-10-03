import {connect} from 'react-redux'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {searchMyths} from '../reducers/mythReducer'

const SearchBar = props => {
    const [ query, setQuery ] = useState("")
    const dispatch = useDispatch()
    const allMyths = useSelector(state => state.myths)
    const handleChange = e => {
        setQuery(e.target.value)
        dispatch(searchMyths(query, allMyths )) 
   }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                <input autoFocus onChange={handleChange} type="search" id="searchBar" placeholder="Search" />
                <button type="submit" className="btn btn-success btn-sm">Search</button>
                </div>
            </form>
        </div>
    )
}
function mapStateToProps(state) {
    return {searchResults: state.searchResults};
  }
  
export default connect(mapStateToProps, null)(SearchBar)
