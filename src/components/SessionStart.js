/**
 * Created by Will on 6/27/17.
 */
import React, { Component } from 'react';
import '../css/SessionStart.css';
import './SessionComplete';

class SessionStart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.session = {
            activity: '',
            description: '',
            location: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(e) {
        this.session[e.target.name] = e.target.value;
    };

    render () {
        return (
            <div className="SessionContent">
                <h2>New Session</h2>
                <h5>Activity</h5>
                <input type="text" name="activity" onChange={ this.handleInputChange } />
                <h5>Description</h5>
                <input type="text" name="description" onChange={ this.handleInputChange } />
                <h5>Location</h5>
                <input type="text" name="location" onChange={ this.handleInputChange } />
                <button className="btn" onClick={ () => this.props.startSession(this.session) }>Start session!</button>
            </div>
        )
    };
};

export default SessionStart;