/**
 * Created by Will on 6/27/17.
 */
import React, { Component } from 'react';
import '../css/SessionStart.css';
import '../css/SessionComplete.css';
import ExpansionToggle from './ExpansionToggle';

class SessionComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {expanded: false };
        let date = new Date();
        var currMins = date.getMinutes();
        if(currMins < 10) {
            currMins = '0' + currMins;
        }
        this.currDateTime = date.getMonth() + 1 + '/' + date.getDate() + ' ' + date.getHours() + ':' + currMins;
        this.handleExpansion = this.handleExpansion.bind(this);
    };

    handleExpansion = () => {
        this.setState({
           expanded: !this.state.expanded
        });
    }

    render () {
        return (
            <div className="SessionContent">
                <h5>{ this.currDateTime }</h5>
                {! this.state.expanded ? (
                    <h5 className="activity-head">{ this.props.session.activity }</h5>
                ) : (
                    <div className="expanded-content">
                        <h5>Activity</h5>
                        <p>{this.props.session.activity}</p>
                        <h5>Description</h5>
                        <p>{this.props.session.description}</p>
                        <h5>Location</h5>
                        <p>{this.props.session.location}</p>
                    </div>
                )}
                <ExpansionToggle expanded={ this.state.expanded } toggle={ this.handleExpansion }/>
            </div>
        )
    };
};

export default SessionComplete;