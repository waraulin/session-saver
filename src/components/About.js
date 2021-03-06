/**
 * Created by Will on 7/3/17.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css';


class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="about-copy">
                    <h1>Welcome to the Session Saver!</h1>
                    <p>Create a record with details about your session</p>
                    <p>Keep your friends in the loop and stay safe</p>
                    <p>Alert them if you're not back in time</p>

                    <ul>
                        <li>Surf</li>
                        <li>Snow</li>
                        <li>Skate</li>
                        <li>Run</li>
                        <li>Ride</li>
                        <li>Trek</li>
                    </ul>

                    <p>Don't care about staying safe? Record stats and share pictures from your session instead.</p>

                </div>
            </div>
        )
    }
}

export default About;