import React, { Component } from 'react';
import firebase from '../firebase.js';
import firebaseui from 'firebaseui';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // FirebaseUI config.
        const uiConfig = {
            callbacks: {
                signInSuccess: function(currentUser, credential, redirectUrl){
                    console.log(currentUser, credential, redirectUrl);
                    const username = currentUser.email.split('@')[0];
                    this.props.handleAuth(currentUser.uid, username);
                }.bind(this)
            },
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
        };
        const ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    }

    render() {
        return (
            <div className="Login">
                <div id="firebaseui-auth-container" />
            </div>
        )
    }
}

export default Login;