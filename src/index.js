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

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {uid: null, username: null, redirect: false};
    }

    updateUser = (uid, username) => {
        this.setState({uid, username, redirect: true}, () => {
            database.ref(`users/${uid}`).set({ username: username });
        });
    };

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={About}/>
                        <Route exact path="/sessions" component={SessionList}/>
                        <Route exact path="/login" render={(...props) => <Login {...props} handleAuth={this.updateUser} />} />
                        {this.state.redirect ? <Redirect to={this.state.username}/> : null}
                        {this.state.uid ? <Route exact path={this.state.username} render={(...props) => <SessionList {...props} uid={this.state.uid} username={this.state.username} />}/> : null}
                        <Route component={NothingFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
};

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
