import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                first_name: '',
                last_name: '',
                avatar: ''
            },
            submit: false,
            updated:false
        }
    }
    componentDidMount() {
        axios.get('https://reqres.in/api/users/' + this.props.match.params.id)
            .then((response) => {
                console.log('re', response.data.data);
                this.setState({ user: response.data.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    onChange(name, value) {
        let obj = this.state.user;
        obj[name] = value;
        this.setState({ user: obj });
    }
    onClick() {
        this.setState({updated:true});
        axios.put('https://reqres.in/api/users' + this.props.match.params.id, {
            name: this.state.first_name,
            job: this.state.last_name
        })
            .then((response) => {
                console.log(response);
                this.setState({ submit: true, updated:false });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    cancel() {
        this.setState({submit:true});
    }
    render() {
        return (
            <div>
                {console.log('edit user prop', this.props.match.params, 'state', this.state)}
                <h4 className='h4'>Edit User</h4><br />
                <div className='div'>
                    <label className='label' >Name:</label>
                </div>
                <input className='input' name='first_name' onChange={(e) => this.onChange(e.target.name, e.target.value)} value={this.state.user.first_name} placeholder='enter first name' ></input>
                <div className='div'>
                    <label className='label'>Job:</label>
                </div>
                <input className='input' name='last_name' onChange={(e) => this.onChange(e.target.name, e.target.value)} value={this.state.user.last_name} placeholder='enter job' ></input>
                <div className='div'>
                    <img src={this.state.user.avatar} alt='avatar' />
                </div>
                <div className='div'>
                    <button className='button' activeclassname='buttonactive' onClick={() => this.onClick()} >{this.state.updated?'please wait' :'Submit'}</button>
                    <button className='button' onClick={() => this.cancel()} >Cancel</button>
                </div>
                {this.state.submit ? <Redirect to='/list' /> : null}
            </div>
        );
    }
}

export default EditUser;