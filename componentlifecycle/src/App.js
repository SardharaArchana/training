import React, { Component } from 'react';

import Form1 from './component/form1';
import Form2 from './component/form2';

class App extends Component {
  constructor(){
    super();
    this.state={
      form1:{
        input1:'',
        input2:''
      },
      form2:{}
    }
  }

  onChange(value,name,id){
    this.setState([id[name]=value]);
  }

  onClick(){
    const {input1,input2}=this.state.form1;
    let obj={input1,input2};
    this.setState({form2:obj});
    console.log('onclick');
  }

  render() {

    console.log('form1',this.state.form1,'form2',this.state.form2);
    
    return (
      <div>
      <Form1 onChange={(value,name)=>this.onChange(value,name,this.state.form1)} onClick={()=>this.onClick()}/>
      {console.log('before form2')}
      <Form2 obj={this.state.form2}/>
      </div>
    );
  }
}

export default App;
