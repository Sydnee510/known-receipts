import React from 'react';
import { Link } from 'react-router-dom'
import Program from './components/Program'
 
class App extends React.Component {
  

  render() {
    return (
      <div className="App">
      <h1>Receipts For Kamala Harris</h1> 
      <Link to="/">Home Page</Link> <br></br>
      <Link to="/myths">Rumors</Link> <br></br>
      <Link to="/myths/new">+Rumor</Link> <br></br>
      <Link to="/background">Kamala's Background</Link>
      <Program/>
      </div>
    );
  }
}

export default App;
