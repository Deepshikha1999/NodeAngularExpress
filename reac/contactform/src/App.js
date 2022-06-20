import logo from './logo.svg';
import './App.css';

import React from "react";

class App extends React.Component{
  showform=false;
  contactarr=[];
  x='';
  constructor(props)
  {
    super(props);
    this.state={
      contactarray:[],
      fname:"",
      email:"",
      contact:"",
      city:"",
      city1:"",
      classname:""

    };

    this.contactarr=this.state.contactarray;
    console.log(JSON.stringify(this.contactarr)+" changes");
    this.handleChange=this.handleChange.bind(this);
    this.onsubmit=this.onsubmit.bind(this);
    this.toggleit=this.toggleit.bind(this);
    this.getclass=this.getclass.bind(this);
  }

  onsubmit(e)
  {
    e.preventDefault();
      this.contactarr.push(this.state.fname);
        this.contactarr.push(this.state.contact);
        this.contactarr.push(this.state.email);
        this.contactarr.push(this.state.city);
        this.contactarr.push(this.state.city1);
        //console.log(this.contactarr);
        for(this.x of this.state.contactarray)
        {
            console.log(this.x);
        }
  }

  toggleit(e)
  {e.preventDefault();
    if(e.target.name==='chkbox')
    {
        this.classname=(e.target.checked===true)?this.setState({classname:'show'}):this.setState({classname:'hide'});
        console.log(this.state.classname + e.target.checked);
        if(e.target.checked===false){
        this.setState({city1:this.state.city})
      }
    }
  }

  getclass(e)
  {
    console.log(this.state.classname +'test');
    return this.state.classname;
  }

  handleChange(e)
  {
       if(e.target.name==='fname')
        {
            this.setState({fname:e.target.value})
        }
        if(e.target.name==='email')
        {
            this.setState({email:e.target.value})
        }
        if(e.target.name==='contact')
        {
            this.setState({contact:e.target.value})
        }
        if(e.target.name==='city')
        {
            this.setState({city:e.target.value})
        }

        if(e.target.name==='city1')
        {
            this.setState({city1:e.target.value})
        }
        //this.contactarr.push(e.target.value);
        //this.setState({contactarr:this.contactarray});
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1>
            CONTACT FORM
          </h1>
          <form>
            <label >Name </label>
            <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange}></input><br/><br/>

            <label>Email </label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input><br/><br/>

            <label>Phone no </label>
            <input type="tel" name="contact" value={this.state.contact} onChange={this.handleChange}></input><br/><br/>

            
           
            <label>Permanent Address </label>
            <input type="text" name="city" value={this.state.city} onChange={this.handleChange}></input><br/>

            
            <input name="chkbox" type="checkbox" checked={this.state.showform} onChange={this.toggleit} ></input>

            <div className={this.getclass()}>
            
            <label>Residential Address </label>
            <input type="text" name="city1" value={this.state.city1} onChange={this.handleChange}></input><br/><br/>
            </div>
            
           
            <button type="submit" onClick={this.onsubmit}>Submit</button>
           
          </form>
        </header>
      </div>
    );
  }
}

export default App;
