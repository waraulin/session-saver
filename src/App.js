import React, { Component } from 'react';
import './App.css';

import HelloWorldList from './HelloWorldList';
import Header from './Header';
import SessionList from './SessionList';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <SessionList/>
        </div>
    );
};

export default App;
