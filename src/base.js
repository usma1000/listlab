import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDBak7cIW3ZuVwPB2Ob1_In6PtOUK2T0Dk",
    authDomain: "listlab-ddf74.firebaseapp.com",
    databaseURL: "https://listlab-ddf74.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;