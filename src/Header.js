/**
 * Created by Will on 6/27/17.
 */

import React, { Component } from 'react';
import './Header.css';
import Modal from "./Modal";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: null,
            modalOpen: false
        };
    }

    toggleModal = () => {
        this.setState({
           modalOpen: !this.state.modalOpen
        });
    }

    render () {
        var modalContent = (
            <div className="modal-content">
                <h2>Login</h2>
                <h5 className="modal-heading">Email</h5>
                <input></input>
                <h5 className="modal-heading">Password</h5>
                <input></input>
                <button className="btn">Login</button>
            </div>
        );
        return (
            <div className="headerContent">
                <h1>Session Saver</h1>
                <button className="btn btn--header" onClick={ this.toggleModal }>Login</button>
                <Modal show={ this.state.modalOpen } onClose={ this.toggleModal } children={ modalContent }>
                </Modal>
            </div>
        );
    }
};

export default Header;