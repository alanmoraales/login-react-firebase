import React, {Component} from 'react';

import './Title.css'

class Title extends Component {
    render() {
        return (
            <p className="title">{this.props.text}</p>
        );
    }
}

export default Title;