/**
 * Created by Will on 6/27/17.
 */

import React, { Component } from 'react';
import SessionStart from './SessionStart';
import SessionComplete from './SessionComplete';
import '../css/SessionList.css';
import { database } from '../firebase.js';

class SessionList extends Component {
    constructor(props) {
        super(props);
        this.authProps = this.props.componentProps ? this.props.componentProps : {uid: null, username: null};
        this.state = { uid: this.authProps.uid, sessions: {}, username: this.authProps.username};
        this.userRef = null;

        //TODO: check `firebase:` local storage data to set initial state.
    }

    componentDidMount() {
        this.userRef = database.ref(`users/${this.state.uid}`);
        this.userSessionsRef = this.userRef.child('sessions');
        this.userSessionsRef.on('value', function(snapshot) {
            const sessions = snapshot.val() ? snapshot.val().reduce((obj, item, index) => (obj[index] = item, obj) ,{}) : {};
            this.setState({ sessions });
        }.bind(this));

    }

    startSession = (session) => {
        let newSession = { ...session };
        let sessions = { ...this.state.sessions };
        const key = Object.keys(sessions).length;
        sessions[key] = newSession;

        this.setState({ sessions }, () => {
            return this.userSessionsRef.update(this.state.sessions);
        });
    };

    deleteSession = (sessionKey) => {
        let sessions = { ...this.state.sessions };
        sessions[sessionKey] = null;
        this.setState({ sessions }, () => {
            return this.userSessionsRef.update(this.state.sessions);
        });
    };

    sendEmail = (newEmail) => {
        this.emailRef = this.userRef.child('emails');
        return this.emailRef.update(newEmail);
    };

    logout = () => {
        this.props.logout(this.props.uid);
    };

    render() {
        return (
            <div className="SessionList">
                <SessionStart startSession={this.startSession} sendEmail={this.sendEmail} />
                {Object.keys(this.state.sessions).map(i => (
                    <SessionComplete key={i} name={i} session={this.state.sessions[i]}
                                     deleteSession={this.deleteSession}/>
                ))}
            </div>
        )
    }
}
export default SessionList;