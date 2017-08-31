import React, { Component } from 'react';
import { auth } from '../firebase.js';
import { Redirect } from 'react-router-dom';
import '../css/Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.user = {email: null, password: null};
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
           if (user) {
               const username = user.email.split('@')[0];
               this.props.handleAuth(user.uid, username);
           } else {
               this.props.logout();
           }
        });

    }

    signup = (e) => {
        e.preventDefault();
        const newEmail = this.refs.newEmail.value;
        const newPassword = this.refs.newPassword.value;
        auth.createUserWithEmailAndPassword(newEmail, newPassword).catch(error => {
            console.log(error);
        });
    };

    signin = (e) => {
        e.preventDefault();
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            console.log(error);
        });
    };

    render() {
        if(this.props.username) {
            return (
                <Redirect to={this.props.username} />
            )
        }

        return (
            <div className="Login">
                <form onSubmit={this.signup}>
                    <p>Sign Up</p>
                    <input type="email" name="email" ref="newEmail" defaultValue="example@sessionsaver.co" />
                    <input type="password" name="password" ref="newPassword" defaultValue="abcdef" />
                    <input type="submit" value="Submit" />
                </form>
                <form onSubmit={this.signin}>
                    <p>Sign In</p>
                    <input type="email" name="email" ref="email" defaultValue="example@sessionsaver.co" />
                    <input type="password" name="password" ref="password" defaultValue="abcdef" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Login;