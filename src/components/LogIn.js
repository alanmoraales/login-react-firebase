import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import fire from '../config/Firebase';

import Title from './Title';
import TextArea from './TextArea';
import Button from './Button';

import './LogIn.css';

class LogIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    login() {
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            // nothing to do
        }).catch((error) => {
            alert(error);
        });
    }

    
    handleChange(targetName, targetValue){
        this.setState({ [targetName]: targetValue }); 
    }

    render() {
        return (
            <div>
                <Title  className="title" text="Log In"/>
                <form>
                    <TextArea handleChange={this.handleChange}
                        className="text-area" type="text" placeHolder="email" name="email"
                    />

                    <TextArea handleChange={this.handleChange}
                        className="text-area" type="password" placeHolder="password" name="password"
                    />
                    
                    <Button clickFunction={this.login} className="button" text="let's go!"/>
                </form>
                <Link className="link" to="/register">don't have an account? create one</Link>
            </div>
        );
    }
}

export default LogIn;