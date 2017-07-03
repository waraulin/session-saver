/**
 * Created by Will on 6/27/17.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import Modal from "./Modal";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: null,
            modalOpen: false
        };
    };

    toggleModal = () => {
        this.setState({
           modalOpen: !this.state.modalOpen
        });
    };

    redirect() {
        console.log("TODO: use React routing to nav to new page.");
    };

    render () {
        var modalContent = (
            <div className="modal-content">
                <h2>Login</h2>
                <h5 className="modal-heading">Email</h5>
                <input></input>
                <h5 className="modal-heading">Password</h5>
                <input></input>
                <button className="btn" onClick={ this.redirect }>Login</button>
            </div>
        );
        return (
            <div className="headerContent">
                <Link className="btn btn--header" to="/">About</Link>
                <Link className="btn btn--header" to="/sessions">Get Started</Link>
                <Link className="main-head" to="/">Session Saver</Link>
                <button className="btn btn--header" onClick={ this.toggleModal }>Login</button>
                <Modal show={ this.state.modalOpen } onClose={ this.toggleModal } children={ modalContent }>
                </Modal>
            </div>
        );
    };
};

export default Header;