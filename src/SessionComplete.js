/**
 * Created by Will on 6/27/17.
 */
import React, { Component } from 'react';
import './SessionStart.css';

class SessionStart extends Component {
    constructor(props) {
        super();
    }

    render () {
        return (
            <div className="SessionContent">
                <h5>Activity</h5>
                <p>{this.props.session.activity}</p>
                <h5>Description</h5>
                <p>{this.props.session.description}</p>
                <h5>Location</h5>
                <p>{this.props.session.location}</p>
                <button>Share session</button>
            </div>
        );
    }
};

export default SessionStart;