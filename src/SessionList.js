/**
 * Created by Will on 6/27/17.
 */

import React, { Component } from 'react';
import SessionStart from './SessionStart';
import SessionComplete from './SessionComplete';

class SessionList extends Component {
    constructor(props) {
        super(props);
        this.state = { sessions: [{activity: "", description: "", location: ""}]  };
        this.startSession = this.startSession.bind(this);
    }

    startSession(session) {
        this.setState({ sessions: [...this.state.sessions, session] });
    }

    renderSessions() {
        return (
            <div>
                { this.state.sessions.map((s, i) => (
                    (this.state.sessions[i].activity.length >= 1)
                        ? <SessionComplete key={i} name={i} session={s} />
                        : null
                ))}
            </div>
        )
    }

    render() {
        return (
            <div className="SessionList">
                <SessionStart startSession={ this.startSession } />
                { this.renderSessions() };
            </div>
        );
    }
}
export default SessionList;