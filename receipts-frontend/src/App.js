import React from 'react';
import './styles/index.css'
import { Link } from 'react-router-dom'
import NavBar from './components/NavBar'
 
class App extends React.Component {
  

  render() {
    return (
      <div className="App">
      <h1>Receipts For Kamala Harris</h1> 
      <ul>
      <li><Link to="/">Home Page </Link></li>
      <li><Link to="/background">Kamala's Background</Link></li>  
      <li><Link to="/myths">Rumors </Link></li> 
      <li><Link to="/myths/new">+Rumor </Link></li> 
      </ul>
      <NavBar/>
      </div>
    );
  }
}

export default App;
