import React, { Component } from 'react';

import './App.css';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

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
      },
  
    }
      }
  setValue(key,value,id){
    let obj={};
    (id===1)? obj=this.state.form1:obj=this.state.form2;
    obj[key]=value;
    this.setState({obj});   

  }
  render() {
    console.log('form1:',this.state.form1,'   ','form2:',this.state.form2);
    
    return (
      <div className="App">
        <SignUp onChange={this.setData}  onSignUp={(key,value)=>this.setValue(key,value,1)}/>
        <SignIn onChange={this.setData}  onSignUp={(key,value)=>this.setValue(key,value,2)}/>
      
      </div>
    );
  }
}

export default App;
