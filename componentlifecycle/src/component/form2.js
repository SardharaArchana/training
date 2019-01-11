import React, {Component} from 'react';

class Form2 extends Component{
    constructor(props){
        super();
        this.state={
            input1:'',
            input2:''
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({input1:nextProps.obj.input1,input2:nextProps.obj.input2});
    }

    render(){
        console.log('state',this.state);
        return(
            <div>
               <p> {this.state.input1}input1.....{this.state.input2}input2...</p>
            </div>
        );
    }

}

export default Form2;