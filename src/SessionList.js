/**
 * Created by Will on 6/27/17.
 */

import React, { Component } from 'react';
import SessionStart from './SessionStart';
import SessionComplete from './SessionComplete';

class SessionList extends Component {
    constructor(props) {
        super(props);
        this.state = { sessions: []  };
        this.startSession = this.startSession.bind(this);
    }

    startSession(session) {
        this.setState({ sessions: [...this.state.sessions, session] });
    }

    renderSessions() {
        return (
            console.log(this.state.sessions),
            <div>
                { this.state.sessions.map((s, i) => (
                    <SessionComplete key={i} name={i} session={s} />
                ))}
            </div>
        )

        /*return this.state.sessions.map((session, i) => (
         <SessionComplete
         key={ i }
         name={ i }
         session={ session }
         />
         ));*/
    }

    render() {
        return (
            <div className="SessionList">
                <SessionStart startSession={ this.startSession } />
                { this.state.sessions.length > 0 ? this.renderSessions() : console.log(this.state.sessions.size) };
            </div>
        );
    }
}
export default SessionList;