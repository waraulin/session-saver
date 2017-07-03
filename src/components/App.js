import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../css/App.css';
import Header from './Header';
import SessionList from './SessionList';
import About from './About';
import NothingFound from './NothingFound';

const MainContent = () => {
    return (
        <Switch>
            <Route exact path="/" component={About}/>
            <Route exact path="/sessions" component={SessionList}/>
            <Route component={NothingFound}/>
        </Switch>
    )
};

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <MainContent/>
            </div>
        </BrowserRouter>
    );
};

export default App;
