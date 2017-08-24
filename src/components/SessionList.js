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
        this.state = { sessions: this.props.uid ? database.ref(`users/${this.props.uid}.sessions`).once('value').then((snapshot) => {
            snapshot.val().sessions;
        }) : {} };
        //TODO: figure out how to import firebase auth
    }

    componentWillMount() {
        /*if(this.props.match.params.user !== undefined) {
            this.ref = base.syncState(`${this.props.match.params.user}/sessions`, {context: this, state: {'sessions', 'username', 'uid'}});
        }*/
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        /*if(this.props.match.params.user !== undefined) {
            base.removeBinding(this.ref);
        }*/
    }

    startSession = (session) => {
        let newSession = { ...session };
        let sessions = { ...this.state.sessions };
        const key = Object.keys(sessions).length;
        sessions[key] = newSession;
        database.ref(`users/${this.state.uid}`).set({
            sessions: sessions
        });
        this.setState({ sessions });
    };

    deleteSession = (sessionKey) => {
        let sessions = { ...this.state.sessions };
        sessions[sessionKey] = null;
        database.ref(`users/${this.state.uid}`).set({
            sessions: sessions
        });
        this.setState({ sessions });
    };

    render() {
        return (
            <div className="SessionList">
                <SessionStart startSession={this.startSession}/>
                {Object.keys(this.state.sessions).map(i => (
                    <SessionComplete key={i} name={i} session={this.state.sessions[i]}
                                     deleteSession={this.deleteSession}/>
                ))}
            </div>
        )
    }
}
export default SessionList;