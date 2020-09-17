import React from 'react';
import {connect} from 'react-redux'
import {fetchMyths} from './actions/fetchMyths'
 class App extends React.Component {
  
  componentDidMount() {
   this.props.fetchMyths({type: "FETCH_MYTHS", payload: {name: "Checking"}})
  }

  render() {
    return (
      <div className="App">
      <h1>Receipts For Kamala Harris</h1> 
      </div>
    );
  }
}

export default connect(null, {fetchMyths})(App);
