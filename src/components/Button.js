import React, {Component} from 'react';
import './Button.css'


class Button extends Component {
    constructor(props) {
        super(props);

        this.clickFunction = this.clickFunction.bind(this);
    }

    clickFunction(e){
        e.preventDefault();
        this.props.clickFunction();
    }
    
    render() {
        return(
            <button onClick={this.clickFunction} type="submit" className="button">{this.props.text}</button>
        );
    }
}

export default Button;