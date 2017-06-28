/**
 * Created by Will on 6/27/17.
 */
import React, { Component } from 'react';
import './SessionStart.css';

class SessionStart extends Component {
    constructor(props) {
        super(props);
        this.state = { sessions: [] };
        this.session = this.props.session;
    }

    render () {
        return (
            <div className="SessionContent">
                <h5>Activity</h5>
                <p>{this.session.activity}</p>
                <h5>Description</h5>
                <p>{this.session.description}</p>
                <h5>Location</h5>
                <p>{this.session.location}</p>
                <button onClick={ console.log("TODO: Add sharing capability.") }>Share session</button>
            </div>
        );
    }
};

export default SessionStart;