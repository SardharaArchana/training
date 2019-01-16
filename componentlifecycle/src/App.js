import React, { Component } from 'react';

import Form1 from './component/form1';
import Form2 from './component/form2';
import './component/component.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      form1: {
        name: '',
        language1: '',
        language2: '',
        language3: '',
        gender: '',
        city: ''

      },
      form2: {}
    }
  }

  onChange(value, name) {
    const obj = this.state.form1;
    obj[name] = value;
    this.setState({ form1: obj });
  }

  onClick() {
    const {name,language,gender,city}=this.state.form1;
    let obj = {name,language,gender,city};
    this.setState({ form2: obj });
  }

  render() {

    console.log('form1', this.state.form1, 'form2', this.state.form2);

    return (
      <div className='div'>
        <Form1 onChange={(value, name) => this.onChange(value, name)} onClick={() => this.onClick()} />
        {console.log('before form2')}
        <Form2 obj={this.state.form2} />
      </div>
    );
  }
}

export default App;
