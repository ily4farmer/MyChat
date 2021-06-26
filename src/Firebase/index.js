



import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyBfQBzoLibg1740oXi6i6fbOOeUbUbVJKM",
    authDomain: "my-chat-41ee5.firebaseapp.com",
    projectId: "my-chat-41ee5",
    storageBucket: "my-chat-41ee5.appspot.com",
    messagingSenderId: "396979646875",
    appId: "1:396979646875:web:18fc23a51ad5321822313e"
});

// модуль авторизации
export const auth = firebase.auth();
// База данных
export const firestore = firebase.firestore();