import React, {Component} from 'react';
import Input from './input';
class SignUp extends Component{
    render(){
    return(
        <div>
            <h1>SignUp</h1>
            <Input type='text' name='firstName' onChange={(e)=>this.props.onSignUp(e.target.name,e.target.value)}/>
            <Input type='text' name='lastName' onChange={(e)=>this.props.onSignUp(e.target.name,e.target.value)}/>
            <Input type='email' name='email' onChange={(e)=>this.props.onSignUp(e.target.name,e.target.value)}/>
            <Input type='password' name='password' onChange={(e)=>this.props.onSignUp(e.target.name,e.target.value)}/>
            <button>submit</button>
        </div>
    );
    }
}
export default SignUp;
