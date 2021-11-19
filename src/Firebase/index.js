



import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyA0vETM0mdZmyc4Ca6u2eG-z_gudsRUTZ0",
    authDomain: "chatnew11.firebaseapp.com",
    projectId: "chatnew11",
    storageBucket: "chatnew11.appspot.com",
    messagingSenderId: "8985392131",
    appId: "1:8985392131:web:9253a4cfc51204fb90ca36",
    measurementId: "G-H3VB8P2KWW"
});

// модуль авторизации
export const auth = firebase.auth();
// База данных
export const firestore = firebase.firestore();
