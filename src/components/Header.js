/**
 * Created by Will on 6/27/17.
 */

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import '../css/Header.css';
import Modal from "./Modal";
import SessionList from "./SessionList";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: null,
            modalOpen: false
        }
        this.username = "";
    }

    toggleModal = () => {
        this.setState({
           modalOpen: !this.state.modalOpen
        });
    };

    redirect = (e) => {
        this.username = e.target.value;
    };

    render () {
        var modalContent = (
            <div className="modal-content">
                <h2>Login</h2>
                <h5 className="modal-heading">Username</h5>
                <input onBlur={this.redirect}></input>
                <Link className="btn" to="/dogs">Login</Link>
            </div>
        )

        return (
            <div className="headerContent">
                <Link className="btn btn--header" to="/">About</Link>
                <Link className="btn btn--header" to="/sessions">Get Started</Link>
                <Link className="main-head" to="/">Session Saver</Link>
                <button className="btn btn--header" onClick={ this.toggleModal }>Login</button>
                <Modal show={ this.state.modalOpen } onClose={ this.toggleModal } children={ modalContent }>
                </Modal>
            </div>
        )
    }
}

export default Header;