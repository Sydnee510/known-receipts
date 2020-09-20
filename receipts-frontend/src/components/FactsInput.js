import React from 'react' 
import {connect} from 'react-redux'
import {addFact} from '../actions/addFact'

class FactsInput extends React.Component {
    
    state = {
        true_content: '',
        receipt_url: ''
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
         })
    }

    handleSubmit = (event) => {
        event.preventDefault()
         this.props.addFact(this.state, this.props.myth.id)
        this.setState({
            true_content: '',
            receipt_url: ''
        })
    }
    
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Fact Content:</label>
                    <input type="text" placeholder="Add a new fact" value={this.state.true_content} name="true_content" onChange={this.handleChange}/>
                    <input type="text" placeholder="receipt url" value={this.state.receipt_url} name="receipt_url" onChange={this.handleChange}/>
                <input type="submit"/>
                </form>
            </div>
        )
    }
}
export default connect(null, {addFact})(FactsInput)