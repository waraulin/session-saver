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
        this.state = { sessions: {} };
        console.log("TODO: don't use array for session list use object instead, firebase doesn't like arrays")
    }

    componentWillMount() {
        if(this.props.match.params.user !== undefined) {
            this.ref = base.syncState(`${this.props.match.params.user}/sessions`, {context: this, state: 'sessions'});
        }
    }

    componentWillUnmount() {
        if(this.props.match.params.user !== undefined) {
            base.removeBinding(this.ref);
        }
    }

    startSession = (session) => {
        let newSession = { ...session };
        let sessions = { ...this.state.sessions };
        const key = Object.keys(sessions).length;
        sessions[key] = session;
        this.setState({ sessions });
    };

    deleteSession = (sessionKey) => {
        let sessions = { ...this.state.sessions };
        sessions[sessionKey] = null;
        this.setState({ sessions });
    };

    render() {
        return (
            <div className="SessionList">
                <SessionStart startSession={ this.startSession } />
                { Object.keys(this.state.sessions).map(i => (
                    <SessionComplete key={i} name={i} session={this.state.sessions[i]} deleteSession={this.deleteSession} />
                ))}
            </div>
        )
    }
}
export default SessionList;