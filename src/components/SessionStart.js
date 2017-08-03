/**
 * Created by Will on 6/27/17.
 */
import React, { Component } from 'react';
import '../css/SessionStart.css';
import './SessionComplete';

class SessionStart extends Component {
    constructor(props) {
        super(props);
        this.session = JSON.parse(localStorage.getItem('session')) || {
            activity: '',
            description: '',
            location: ''
        };
    }

    handleInputChange = (e) => {
        this.session[e.target.name] = e.target.value;
        localStorage.setItem('session', JSON.stringify(this.session));
    };

    handleButtonClick = (e) => {
        this.props.startSession(this.session);
        this.refs.activity.value = "";
        this.refs.description.value = "";
        this.refs.location.value = "";
        this.session = {
            activity: '',
            description: '',
            location: ''
        };
        localStorage.setItem('session', JSON.stringify(this.session));
    }

    render () {
        return (
            <div className="SessionContent">
                <h2>New Session</h2>
                <h5>Activity</h5>
                <input type="text" name="activity" ref="activity" onBlur={ this.handleInputChange } defaultValue={ this.session.activity } />
                <h5>Description</h5>
                <input type="text" name="description" ref="description" onBlur={ this.handleInputChange } defaultValue={ this.session.description } />
                <h5>Location</h5>
                <input type="text" name="location" ref="location" onBlur={ this.handleInputChange } defaultValue={ this.session.location } />
                <button className="btn" onClick={ this.handleButtonClick }>Start session!</button>
            </div>
        )
    }
}

export default SessionStart;