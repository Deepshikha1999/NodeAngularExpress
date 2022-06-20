import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from './Form';

class App extends React.Component{

  constructor(props)
  {
    super(props);
    console.log("hello "+this.props.color);
    this.state={
      name:"Deepshikha",
      email:"deepshikha01081999@gmail.com"
    };

    this.changeit=this.changeit.bind(this);
   
  }

  changeit(e)
  {
    this.setState({email:"deepshikha.sahoo@ibm.com"});
  }

  render()
  {
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
            <br/>
            state variable: {this.state.name} {this.state.email}
            <br/>
    
          </a>
          <button onClick={this.changeit}>i m new here</button>
          <Form email={this.state.email} method={this.changeit}></Form>
        </header>
      </div>
    );
  }
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

export default App;
