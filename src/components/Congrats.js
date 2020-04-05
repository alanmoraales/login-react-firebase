import React, {Component} from 'react';

import Title from './Title';
import Button from './Button';

import './Congrats.css';

class Congrats extends Component {
    render() {
        return(
            <div>
                <Title className="title" text="Congrats"/>
                <p>your account has been created.</p>
                <Button className="button" text="go to login"/>
            </div>
        );
    }
}

export default Congrats;