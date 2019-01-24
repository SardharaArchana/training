import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './addUser.css';
import axios from 'axios';

class AddUser extends Component {
    constructor() {
        super();
        this.state = {
            submit: false,
            name:'',
            job:'',
            getData:false
        }
    }
    onClick() {
        this.setState({getData:true});
        axios.post('https://reqres.in/api/users', {
            name: this.state.name,
            job: this.state.job
        })
            .then((response) => {
                console.log(response);
                this.setState({ submit: true, getData:false });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    cancel() {
        this.setState({submit:true});
    }
    onChange(name,value){
        let obj={};
        obj[name]=value;
        this.setState(obj);
    }
    render() {
        return (
            <div className='div'>
                <h4 className='h4'>Add User</h4><br />
                <div className='div'>
                    <label className='label' >Name:</label>
                </div>
                <input className='input' placeholder='enter first name' name='name' onChange={(e)=>this.onChange(e.target.name,e.target.value)}></input>
                <div className='div'>
                    <label className='label'>Job:</label>
                </div>
                <input className='input' placeholder='enter job' name='job' onChange={(e)=>this.onChange(e.target.name,e.target.value)}></input>
                <div className='div'>
                    <button className='button'  onClick={() => this.onClick()}>{this.state.getData?'please wait' :'Submit'}</button>
                    <button className='button'  onClick={() => this.cancel()} >Cancel</button>
                </div>
                {this.state.submit ? <Redirect to='/list' /> : null}
            </div>
        )
    }
}

export default AddUser;