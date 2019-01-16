import React, { Component } from 'react';
// import Input from './input';
import './component.css';

class Form1 extends Component {


    render() {

        return (
            <div className='divStyle'>
                <input type='text' name='name' onChange={(e) => this.props.onChange(e.target.value, e.target.name)} />
                <br /><br />
                <input type="radio" name="gender" value="male" onChange={(e) => this.props.onChange(e.target.value, e.target.name)} /> Male
                <input type="radio" name="gender" value="female" onChange={(e) => this.props.onChange(e.target.value, e.target.name)} /> Female
                <input type="radio" name="gender" value="other" onChange={(e) => this.props.onChange(e.target.value, e.target.name)} /> Other
                <br /><br />
                <input type='checkbox' name='language1' value='C' onChange={(e) => this.props.onChange(e.target.value, e.target.name)} />C
                <input type='checkbox' name='language2' value='C++' onChange={(e) => this.props.onChange(e.target.value, e.target.name)} />C++
                <input type='checkbox' name='language3' value='other' onChange={(e) => this.props.onChange(e.target.value, e.target.name)} />other
                <br /><br />
                <select name='city' onChange={(e) => this.props.onChange(e.target.value, e.target.name)}>
                    <option>Abad</option>
                    <option>surat</option>
                    <option>Rajkot</option>
                    <option>other</option>
                </select>
                <br /><br />
                <button onClick={this.props.onClick}>submit</button>
            </div>
        );
    }

}

export default Form1;