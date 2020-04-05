import React, {Component} from 'react';

import fire from '../config/Firebase';

import Title from './Title';
import Button from './Button';

import './Congrats.css';
import './User.css';

class User extends Component {
    constructor(props) {
        super(props);
        this.getText = this.getText.bind(this);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    getText(){
        var texts = [
            "Roses are red.",
            "Hello world.",
            "Something went wrong.",
            "Is this the real life?",
            "Is this just fantasy?",
            "Loading textures...",
            "Entre la lluvia y el Sol, te elijo a tí mejor.",
            "Nothing good happens after 2am.",
            "If you're not scared, you're not taking a chance and if you're not taking a chance then what the hell are you doing?",
            "Los burritos son alimento.",
            "¡Willy un tornado!",
            "The humans whose name is written in this page shall die.",
            "HTML is not a programming language",
            "While there's life, there's hope.",
            "You're in big trouble, Mr.",
            "You got it dude!",
            "Have mercy!",
            "Terraria is better than Minecraft.",
            "We were on a break!",
            "Joey doesn't share food!"
        ]

        var index = Math.floor(Math.random() * texts.length);
        
        return texts[index]; 
    }
    render() {
        return(
            <div>
                <Title className="title" text="You're logged in."/>
                <p className="phrase">{this.getText()}</p>
                <Button clickFunction={this.logout} className="button" text="log out"/>
            </div>
        );
    }
}

export default User;