import React, {Component} from 'react';
class SignUp extends Component{
    onChange(e){
        const key = e.target.id;
        const value = e.target.value;
        let obj={};
        obj[key]=e.target.value;
        this.props.onChange(key,value,1);
    }
    render(){
    return(
        <div>
            <h1>SignUp</h1>
            enter name:<input type='text' id='firstName' onChange={e=>this.onChange(e)}/>
            enter last name:<input type='text' id='lastName' onChange={e=>this.onChange(e)}/>
            enter email:<input type='email' id='email' onChange={e=>this.onChange(e)}/>
            enter password:<input type='password' id='password' onChange={e=>this.onChange(e)}/>
            <button>submit</button>
        </div>
    );
    }
}
export default SignUp;
