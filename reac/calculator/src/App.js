import logo from './logo.svg';
import './App.css';

import React from "react";

class App extends React.Component{

  arr=[];
  arr1=[];
  x='';
  y='';
  r=0;
  r1=1;
  constructor(props)
  {
    super(props);
    this.state={
      
      txt:"",
      one:"1",
      two:"2",
      three:"3",
      four:"4",
      five:"5",
      six:"6",
      seven:"7",
      eight:"8",
      nine:"9",
      zero:"0",
      plus:"+",
      minus:"-",
      equalto:"=",
      multiply:"*",
      divide:"/"
    }
    this.input_value=this.input_value.bind(this);
    this.solution=this.solution.bind(this);
    this.make_clear=this.make_clear.bind(this);
    
  }

  input_value(e)
  {
     if(e.target.name==='one')
     {
       this.setState({txt:this.state.txt+this.state.one});
     }

     if(e.target.name==='two')
      this.setState({txt:this.state.txt+this.state.two});

      if(e.target.name==='three')
      this.setState({txt:this.state.txt+this.state.three});

      if(e.target.name==='four')
      this.setState({txt:this.state.txt+this.state.four});

      if(e.target.name==='five')
      this.setState({txt:this.state.txt+this.state.five});

      if(e.target.name==='six')
      this.setState({txt:this.state.txt+this.state.six});

      if(e.target.name==='seven')
      this.setState({txt:this.state.txt+this.state.seven});

      if(e.target.name==='eight')
      this.setState({txt:this.state.txt+this.state.eight});

      if(e.target.name==='nine')
      this.setState({txt:this.state.txt+this.state.nine});

      if(e.target.name==='zero')
      this.setState({txt:this.state.txt+this.state.zero});

      if(e.target.name==='plus')
      this.setState({txt:this.state.txt+this.state.plus});

      if(e.target.name==='minus')
      this.setState({txt:this.state.txt+"+"+this.state.minus});

      if(e.target.name==='multiply')
      this.setState({txt:this.state.txt+this.state.multiply});

      if(e.target.name==='divide')
      this.setState({txt:this.state.txt+this.state.divide});

     


     // console.log(this.state.txt);
  }

  solution(e)
  {
    if(e.target.name==='equalto')
    console.log(this.state.txt);
    if(this.state.txt.includes('+'))
    {
      this.arr=this.state.txt.split("+");
      //console.log(this.arr);

      for(this.x of this.arr)
      {
        //console.log(this.x);
        
        
        this.r=this.r+Number(this.x);
      }
      //alert(this.r);
      this.setState({txt:this.r})
      this.r=0;
    }
      if(this.state.txt.includes('*'))
      {
        this.arr=this.state.txt.split("*");
        for(this.x of this.arr)
        {
          this.r1=this.r1*this.x;
        }

        //alert(this.r1);
        this.setState({txt:this.r1})
        this.r1=1;
      }

      if(this.state.txt.includes('/'))
      {
        this.arr=this.state.txt.split("/");
        for(this.x of this.arr)
        {
          this.r1=(1/this.x)/this.r1;
        }

        //alert(this.r1);
        this.setState({txt:this.r1})
        this.r1=1;
      }
    
  }

  make_clear(e)
  {
      this.setState({txt:""});
  }

 
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
         <h1>CALCULATOR</h1>
        <form >
          <input type="text" value={this.state.txt} name="txt" onChange={this.input_value}></input>
          <button type="button" name="clear" onClick={this.make_clear}>Clear</button><br/>
        <input type="button" value={this.state.one} name="one" onClick={this.input_value}></input>
        <input type="button" name="two" value={this.state.two} onClick={this.input_value}></input>
        <input type="button" name="three" value={this.state.three} onClick={this.input_value}></input><br/>
        <input type="button" name="four" value={this.state.four} onClick={this.input_value}></input>
        <input type="button" name="five" value={this.state.five} onClick={this.input_value}></input>
        <input type="button" name="six" value={this.state.six} onClick={this.input_value}></input><br/>
        <input type="button" name="seven" value={this.state.seven} onClick={this.input_value}></input>
        <input type="button" name="eight" value={this.state.eight} onClick={this.input_value}></input>
        <input type="button" name="nine" value={this.state.nine} onClick={this.input_value}></input><br/>
        <input type="button" name="zero" value={this.state.zero} onClick={this.input_value}></input>
        <input type="button" name="multiply" value={this.state.multiply} onClick={this.input_value}></input>
        <input type="button" name="divide" value={this.state.divide} onClick={this.input_value}></input><br/>
        <input type="button" name="plus" value={this.state.plus} onClick={this.input_value}></input>
        <input type="button" name="minus" value={this.state.minus} onClick={this.input_value}></input>
        <input type="button" name="equalto" value={this.state.equalto} onClick={this.solution}></input><br/>
       
        </form>
        
        </header>
      </div>
    );
  }
}



export default App;
  