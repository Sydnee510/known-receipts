import React from 'react';
//import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import MythsContainer from './containers/MythsContainer'
 
class App extends React.Component {
  

  render() {
    return (
      <div className="App">
      <h1>Receipts For Kamala Harris</h1> 
      <Link to="/">Home Page</Link> <br></br>
      <Link to="/myths">Rumors</Link> <br></br>
      <Link to="/myths/new">+Rumor</Link> <br></br>
      <MythsContainer/>
      </div>
    );
  }
}

export default App;
