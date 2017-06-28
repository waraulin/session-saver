/**
 * Created by Will on 6/27/17.
 */
import React, { Component } from 'react';
import './SessionStart.css';
import './SessionComplete';

class SessionStart extends Component {
    constructor(props) {
        super(props);
        this.state = { sessions: []  };
        this.session = {
            activity: '',
            description: '',
            location: ''
        };
        this.startSession = this.startSession.bind(this);
        this.setActivity = this.setActivity.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setLocation = this.setLocation.bind(this);
    };

    startSession() {
        this.props.startSession(this.session);
    };

    setActivity(e) {
        this.session.activity = e.target.value;
    };
    setDescription(e) {
        this.session.description = e.target.value;
    };
    setLocation(e) {
        this.session.location = e.target.value;
    };

    render () {
        return (
            <div className="SessionContent">
                <h2>New Session</h2>
                <h5>Activity</h5>
                <input type="text" onChange={ this.setActivity } />
                <h5>Description</h5>
                <input type="text" onChange={ this.setDescription } />
                <h5>Location</h5>
                <input type="text" onChange={ this.setLocation } />
                <button onClick={ () => this.startSession() }>Start session!</button>
            </div>
        );
    }
};

export default SessionStart;