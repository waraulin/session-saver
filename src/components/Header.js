/**
 * Created by Will on 6/27/17.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
/*import Modal from "./Modal";*/

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: null,
            modalOpen: false
        };
        this.username = "";
    }

    componentDidMount() {


    }

    /*
    toggleModal = () => {
        this.setState({
           modalOpen: !this.state.modalOpen
        });
    };

    <button className="btn btn--header" onClick={ this.toggleModal }>Login</button>
    <Modal show={ this.state.modalOpen } onClose={ this.toggleModal } children={ modalContent }></Modal>
    */

    render () {
        return (
            <div className="headerContent">
                <Link className="main-head" to="/">Session Saver</Link>
                <Link className="btn btn--header" to="/">About</Link>
                <Link className="btn btn--header" to="/sessions">Get Started</Link>
                <Link className="btn btn--header" to="/login">Login</Link>
            </div>
        )
    }
}

export default Header;