import React from 'react';
//import {connect} from 'react-redux'
import MythsContainer from './containers/MythsContainer'
 
class App extends React.Component {
  

  render() {
    return (
      <div className="App">
      <h1>Receipts For Kamala Harris</h1> 
      <MythsContainer/>
      </div>
    );
  }
}

export default App;
