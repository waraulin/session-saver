/**
 * Created by Will on 6/27/17.
 */

import React, { Component } from 'react';
import SessionStart from './SessionStart';
import SessionComplete from './SessionComplete';
import base from '../base.js';

class SessionList extends Component {
    constructor(props) {
        super(props);
        /*const prevSessions = JSON.parse(localStorage.getItem("sessions"));*/
        this.state = { sessions: [] };
    }

    componentWillMount() {
        if(this.props.match.params.user !== undefined) {
            this.ref = base.syncState(`${this.props.match.params.user}/sessions`, {context: this, state: 'sessions'});
        }
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    startSession = (session) => {
        let newSession = { ...session };
        this.setState({ sessions: [...this.state.sessions, newSession] });

    };

    deleteSession = (key) => {
        let sessions = [...this.state.sessions];
        sessions[key] = null;
        sessions = sessions.filter(function(session) {
           return session !== undefined && session != null;
        });
        this.setState({ sessions });
    };

    render() {
        return (
            <div className="SessionList">
                <SessionStart startSession={ this.startSession } />
                { Object.keys(this.state.sessions).map((session, i) => (
                    session !== undefined ?
                    <SessionComplete key={i} name={i} session={session} deleteSession={this.deleteSession} /> : null
                ))}
            </div>
        )
    }
}
export default SessionList;