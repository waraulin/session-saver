/**
 * Created by Will on 6/30/17.
 */
//Sourced from https://daveceddia.com/open-modal-in-react/

import React from 'react';
import './Modal.css';

class Modal extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }

        return (
            <div className="backdrop">
                <div className="modal">
                    <button className="close" onClick={this.props.onClose}>×</button>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool,
    children: React.PropTypes.node
};

export default Modal;