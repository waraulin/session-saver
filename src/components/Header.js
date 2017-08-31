/**
 * Created by Will on 6/27/17.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
/*import Modal from "./Modal";*/

class Header extends Component {
    render () {
        return (
            <div className="headerContent">
                <Link className="main-head" to="/">Session Saver</Link>
                <Link className="btn btn--header" to="/">About</Link>
                <Link className="btn btn--header" to="/login">Get Started</Link>
                { this.props.authenticated ?
                    <button className="btn btn--header" onClick={this.props.logout}>Logout</button> :
                    <Link className="btn btn--header" to="/login">Login</Link>
                }
            </div>
        )
    }
}

export default Header;