import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBx5jYo5aV-EDnEL2y_lbXLvPiu4b-gKZA",
    authDomain: "session-saver.firebaseapp.com",
    databaseURL: "https://session-saver.firebaseio.com",
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const database = firebase.database();

export default firebase;