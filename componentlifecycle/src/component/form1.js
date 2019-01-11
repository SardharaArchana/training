import React, {Component} from 'react';

class Form1 extends Component{

    render(){

        return(
            <div>
                <input name='input1' onChange={(e)=>this.props.onChange(e.target.value,e.target.name)}/>
                <input name='input2'onChange={(e)=>this.props.onChange(e.target.value,e.target.name)}/>
                <button onClick={this.props.onClick}>submit</button>
            </div>
        );
    }

}

export default Form1;