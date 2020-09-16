import React from 'react';

 class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/myths', {
      method: "GET"
    })

    .then(response => response.json())
    .then(data => console.log(data))

  }
  render() {
    return (
      <div className="App">
      <h1>Receipts For Kamala Harris</h1> 
      </div>
    );
  }
}

export default App;
