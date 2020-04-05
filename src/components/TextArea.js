import React, { Component } from 'react';

import './TextArea.css';

class TextArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value}, () => {
            this.props.handleChange(this.props.name, this.state.value);
        });
    }

    render() {
        return(
            <input onKeyUp={this.handleChange} type={this.props.type} 
                placeholder={this.props.placeHolder}
                className="text-area">
            </input>
        );
    }
}

export default TextArea;