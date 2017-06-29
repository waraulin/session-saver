/**
 * Created by Will on 6/27/17.
 */

import React, { Component } from 'react';
import SessionStart from './SessionStart';
import SessionComplete from './SessionComplete';

class SessionList extends Component {
    constructor(props) {
        super();
        this.state = { sessions: []  };
        this.startSession = this.startSession.bind(this);
    }

    startSession(session) {
        let newSession = { ...session };
        this.setState({ sessions: [...this.state.sessions, newSession] });
    }

    renderSessions() {
        return (
            this.state.sessions.map((session, i) => (
                <SessionComplete key={i} name={i} session={session} />
            ))
        );
    }

    render() {
        return (
            <div className="SessionList">
                <SessionStart startSession={ this.startSession } state={ this.state } />
                { this.renderSessions() };
            </div>
        );
    }
}
export default SessionList;