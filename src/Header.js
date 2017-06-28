/**
 * Created by Will on 6/27/17.
 */

import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: null};
    }

    render () {
        return (
            <div className="headerContent">
                <h1>Session Saver</h1>
            </div>
        );
    }
};

export default Header;