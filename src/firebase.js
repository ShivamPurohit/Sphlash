import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDg8L4JqbJDjLwUJc9WogBEWeMeQOisoOk",
    authDomain: "sphlash.firebaseapp.com",
    projectId: "sphlash",
    storageBucket: "sphlash.appspot.com",
    messagingSenderId: "368419121832",
    appId: "1:368419121832:web:b4e9b2e1c82ef11097f09d",
    measurementId: "G-PJK3648SK7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { db, auth, provider, firebaseApp, storage };