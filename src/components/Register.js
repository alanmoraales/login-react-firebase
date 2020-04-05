import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import fire from '../config/Firebase';

import Title from './Title';
import TextArea from './TextArea';
import Button from './Button';

import './LogIn.css';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }

        this.passwordMatch = this.passwordMatch.bind(this);
        this.register = this.register.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    passwordMatch() {
        if(this.state.password === this.state.confirmPassword) {
            return true;
        }
        return false;
    }

    register(){
        if(this.passwordMatch()) {
            fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                alert('Your account has been created');
            }).catch((error) => {
                    alert(error);
                });
        } else {
            alert('Passwords do not match.');
        }
        
    }

    handleChange(targetName, targetValue){
        this.setState({ [targetName]: targetValue });
    }

    render() {
        return (
            <div>
                <Title text="Register"/>
                <form>
                    <TextArea handleChange={this.handleChange} className="text-area" 
                        type="text" placeHolder="email" name="email"
                    />

                    <TextArea handleChange={this.handleChange} className="text-area" 
                        type="password" placeHolder="password" name="password"
                    />

                    <TextArea handleChange={this.handleChange} className="text-area" 
                        type="password" placeHolder="confirm password" name="confirmPassword"
                    />

                    <Button clickFunction={this.register} className="button" text="sign up"/>
                </form>
                <Link className="link" to="/">already have an account? log in</Link>
            </div>
        );
    }
}

export default Register;