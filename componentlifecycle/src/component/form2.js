import React, { Component } from 'react';
import Display from './display';
import './component.css';

class Form2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form2: {},
            mount: true
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log('jhliukh', nextProps);
        // this.setState({ form2: nextProps.obj });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.mount) {
            console.log('true');
            return true;
        } else {
            console.log('false');
            return false;
        }
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('component will update');
        console.log(nextProps, nextState);
  
    }

    componentDidUpdate(prevProps,prevState){
        console.log('component did update');
        console.log('...', prevProps, '.......', prevState);
        this.setState({ form2: prevState });
        this.setState({ mount: false });

    }

    render() {
        const { name, language1, language2, language3, gender, city } = this.state.form2;
        console.log('state', this.state);
        return (
            <div className='divStyle'>
                <Display name='name' state={name} />
                <Display name='language' state={language1 || language2 || language3} />
                <Display name='gemder' state={gender} />
                <Display name='city' state={city} />
            </div>
        );
    }

}

export default Form2;