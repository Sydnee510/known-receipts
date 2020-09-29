import React from 'react'
import {connect} from 'react-redux'
import {addMyth} from '../actions/addMyth'
class MythInput extends React.Component {

    state = {
        false_content: ''
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addMyth(this.state)
        this.setState({
            false_content: ''
        })
    }

    render() {
        return (
            <div>
             <form onSubmit={this.handleSubmit}>
                 <label>Myth Content:</label>
                 <input type="text" placeholder="Add a new myth" value={this.state.false_content} name="false_content" onChange={this.handleChange}/>
                <input type="submit"/>
            </form>   
            </div>
        )
    }
}

export default connect(null, {addMyth})(MythInput)