import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NothingFound from './components/NothingFound';
import Header from './components/Header';
import SessionList from './components/SessionList';
import About from './components/About';
import Login from './components/Login';
import { database } from './firebase';

const authentication = {
    uid: null,
    username: null,
    authenticated: false,
    login(uid,username) {
        this.uid = uid;
        this.username = username;
        this.authenticated = true;
    },
    logout(uid) {
        this.authenticated = false;
        this.uid = null;
        this.username = null;
    }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    console.log("this is happening"),
    <Route {...rest} exact path="/:username" render={props => (
        authentication.authenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
);

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {uid: null, username: null, redirect: false};
        //TODO: figure out why Redirect isn't working
    }

    updateUser = (uid, username) => {
        authentication.login(uid, username);
        this.setState({uid, username, redirect: true}, () => {
            database.ref(`users/${uid}`).set({ username: username });
        });
    };

    logout = (uid) => {
        authentication.logout(uid);
        this.setState({uid: null, username: null, redirect: false}, () => {
            /*database.removeBinding(`users/${uid}`);*/
        });
    };

    /*{this.state.redirect ? <Redirect to={this.state.username}/> : null}*/
    /*{this.state.uid ? <Route exact path={this.state.username} render={(...props) => <SessionList {...props} uid={this.state.uid} username={this.state.username} />}/> : null}*/
    /*<Route component={NothingFound}/>*/
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={About}/>
                    <Route exact path="/login" render={(...props) => <Login {...props} handleAuth={this.updateUser} username={this.state.username} />} />
                    <Route exact path="/sessions" component={SessionList}/>
                    <PrivateRoute path={this.state.username} component={SessionList} username={authentication.username} uid={authentication.uid} logout={authentication.logout} redirect={authentication.authenticated} />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
