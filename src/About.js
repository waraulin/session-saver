/**
 * Created by Will on 7/3/17.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                <h1>Welcome to the Session Saver!</h1>
                <p>Use this app to keep track of your sessions and let your friends know you're okay.</p>
                <Link className="std-btn" to="/sessions">Get Started</Link>
            </div>
        );
    };
};

export default About;