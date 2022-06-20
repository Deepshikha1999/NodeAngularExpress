import logo from './logo.svg';
import './App.css';
import React from 'react';

class Form extends React.Component {
    contactarr =[];
    showform=true;
    constructor(props){
        super(props);
        this.myRef=React.createRef();
        this.state ={
            contactarray:[],
          fname:'Deepshikha',
          lname:'Sahoo',
          email:'deepshikha01081999@gmail.com',
          classname:''
     
        }
        this.contactarr=this.state.contactarray;
        this.handleChange = this.handleChange.bind(this);
        console.log(JSON.stringify(this.contactarr)+" changes");
        this.onsubmit=this.onsubmit.bind(this);
        this.getclass=this.getclass.bind(this);
        this.toggleit=this.toggleit.bind(this);
    }


          
          toggleit(e)
          {
              if(e.target.name==='chkbox')
              {
                  this.classname=(e.target.checked===true)?this.setState({classname:'show'}):this.setState({classname:'hide'});
                  console.log(this.state.classname);
              }
          }

    handleChange(e)
    {
       

        if(e.target.name==='fname')
        {
            this.setState({fname:e.target.value})
        }
        if(e.target.name==='lname')
        {
            this.setState({lname:e.target.value})
        }
        if(e.target.name==='email')
        {
            this.setState({email:e.target.value})
        }
       

        this.contactarr.push(e.target.value);
        console.log(this.contactarr);
        this.setState({contactarr:this.contactarray});
       
        /*console.log(this.state.fname);
        console.log(this.state.lname);
        console.log(this.state.email);*/



    }

          getclass(e)
          {
              console.log(this.state.classname +'test');
              return this.state.classname;
          }

    onsubmit(e)
    {
        e.preventDefault();
       
        console.log(this.myRef.current.value);
        this.contactarr.push(this.state.fname);
        this.contactarr.push(this.state.lname);
        this.contactarr.push(this.state.email);
        console.log(this.contactarr);
    }
 
    render(){
        return (
            <div className="App">
 
     <form>  
           <label>  First  Name:</label>
          <input type="text" value={this.state.fname} name="fname" onChange={this.handleChange} />
           <br/>
          <label> Last  Name:</label>
          <input type="text" value={this.state.lname} name="lname" onChange={this.handleChange} />
          <br/>
        <label> home Address:</label>
          <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
          <br/>

          
        
 
 <input type="checkbox" name="chkbox" checked={this.state.showform} onChange={this.toggleit}/>

        <div className={this.getclass()}>
          <label>  res Address:</label>
          <input type="text" ref={this.myRef2}/><br/>

          <label>skillset</label>
          <input type="text" ref={this.myRef}/><br/>
          <br/>
          </div >
          
          
          {this.contactarr.map((x,index)=>{return <li>{x}</li>})}
           <button type="submit" onClick={this.onsubmit}>Submit</button>
           <button type="button" onClick={this.props.method}>Click me</button>
 
     </form>
     </div>);
    }
 
}
export default Form;
