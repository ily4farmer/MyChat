



import firebase from 'firebase'

firebase.initializeApp({
   apiKey: "AIzaSyCeoTy75yZWCU2guejjBXtzgK8Ysnors-E",
    authDomain: "chatnew1-d93ff.firebaseapp.com",
    projectId: "chatnew1-d93ff",
    storageBucket: "chatnew1-d93ff.appspot.com",
    messagingSenderId: "952984496977",
    appId: "1:952984496977:web:baea3f9925386a61eb8170"
});

// модуль авторизации
export const auth = firebase.auth();
// База данных
export const firestore = firebase.firestore();