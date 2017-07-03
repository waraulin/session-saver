/**
 * Created by Will on 6/29/17.
 */
import React, { Component } from 'react';
import '../css/ExpansionToggle.css';

class ExpansionToggle extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    };

    render() {
        var buttonCopy = ! this.props.expanded ? "Show Detail +" : "Hide Detail -";
        return (
            <div className="ExpansionToggle">
                <button className="expansion-btn" onClick={ this.props.toggle }>{ buttonCopy }</button>
            </div>
        )
    };
};

export default ExpansionToggle;