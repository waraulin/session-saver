import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SessionList from './components/SessionList';
import About from './components/About';
import NothingFound from './components/NothingFound';
import Header from './components/Header';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={About}/>
                    <Route exact path="/sessions" component={SessionList}/>
                    <Route exact path="/:user" component={SessionList}/>
                    <Route component={NothingFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
};

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
