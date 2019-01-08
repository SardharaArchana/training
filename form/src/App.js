import React, { Component } from 'react';

import './App.css';
import SignIn from './body/SignIn';
import SignUp from './body/SignUp';

class App extends Component {
  constructor(){
    super();
    this.state={
      form1:{
        firstName:'',
        lastName:'',
        email:'',
        password:''
      },
      form2:{
        email:'',
        password:''
      }
    }
    this.setData=this.setData.bind(this);
  }
  setData(key,value,id){
    if(id===1){
    let obj={};
    obj=this.state.form1;
    obj[key]=value;
    this.setState({form1:obj});   
    console.log('form 1 obj', this.state.form1);
  }
  else if(id===2){
    let obj={};
    obj=this.state.form2;
    obj[key]=value;
    this.setState({form2:obj});   
    console.log('form 2 obj', this.state.form2);
  }
}
  render() {
    
    return (
      <div className="App">
        <SignUp onChange={this.setData}/>
        <SignIn onChange={this.setData}/>
      
      </div>
    );
  }
}

export default App;
