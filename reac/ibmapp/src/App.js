import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component {
   
constructor(props)
{
  super(props);
  console.log("constructor call");
  console.log("props passed "+this.props.color);
}


 
  render(){
    
   return (
    <div className="App">
    <h1> hello world! </h1>
  </div>
   );

   
  }


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
}
export default App;
