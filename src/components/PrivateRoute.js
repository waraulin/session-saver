import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        console.log("Private Route:", this.props);
    }

    render() {
        return (
            <Route render={(...props) => (
                this.props.redirect ? (
                    <this.props.component {...props} />
                ) : (
                    <Redirect to={{
                        pathname: '/login'
                    }}/>
                )
            )}/>
        )
    }
}

export default PrivateRoute;