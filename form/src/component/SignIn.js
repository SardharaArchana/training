import React, {Component} from 'react';
import Input from './input';
class SignIn extends Component{
    onChange(e){
        const key = e.target.name;
        const value = e.target.value;
        let obj={};
        obj[key]=e.target.value;
        this.props.onChange(key,value,2);
    }
    render(){
    return(
        <div>
            <h1>SignIn</h1>
            <Input type='email' name='email' onChange={(e)=>this.props.onSignUp(e.target.name,e.target.value)}/>
            <Input type='password' name='password' onChange={(e)=>this.props.onSignUp(e.target.name,e.target.value)}/>
            <button>submit</button>
        </div>
    );
    }
}
export default SignIn;
