import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
/*import NothingFound from './components/NothingFound';*/
import Header from './components/Header';
import SessionList from './components/SessionList';
import About from './components/About';
import Login from './components/Login';
import { auth } from './firebase';

const authentication = {
    authenticated: false,
    login() {
        this.authenticated = true;
    },
    logout() {
        this.authenticated = false;
    }
};

var componentProps = {};
const PrivateRoute = ({ component: Component, ...rest }) => (
    componentProps = {...rest},
    <Route {...rest} exact path="/:username" render={(props) => (
        authentication.authenticated ? (
            <Component {...props} componentProps={componentProps} />
        ) : (
            <Redirect to={{
                pathname: '/login',
            }}/>
        )
    )}/>
);

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {uid: null, username: null, redirect: false};
    }

    updateUser = (uid, username) => {
        authentication.login(); // this needs to happen before state is updated
        this.setState({uid, username, redirect: true});
    };

    logout = () => {
        console.log("logging out");
        authentication.logout();
        this.setState({uid: null, username: null, redirect: false}, () => {
            auth.signOut().then(() => {
                console.log("success");
            }).catch(error => {
                console.log(error);
            });
        });
    };

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header authenticated={authentication.authenticated} logout={this.logout} />
                    <Route exact path="/" component={About}/>
                    <Route exact path="/login" render={(...props) => <Login {...props} handleAuth={this.updateUser} username={this.state.username} logout={this.logout} />} />
                    <Route exact path="/sessions" component={SessionList}/>
                    <PrivateRoute path={this.state.username} component={SessionList} username={this.state.username} uid={this.state.uid} logout={this.logout} redirect={this.state.redirect} />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
