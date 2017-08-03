/**
 * Created by Will on 8/1/17.
 */

import Rebase from 're-base';
import firebase from 'firebase';

var app = firebase.initializeApp({
    apiKey: "AIzaSyBx5jYo5aV-EDnEL2y_lbXLvPiu4b-gKZA",
    authDomain: "session-saver.firebaseapp.com",
    databaseURL: "https://session-saver.firebaseio.com",
    projectId: "session-saver",
    storageBucket: "session-saver.appspot.com",
    messagingSenderId: "147602163701"
});

const base = Rebase.createClass(app.database());

export default base;