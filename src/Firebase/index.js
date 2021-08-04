



import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyC9e2_1CfpuDsWaCIQy9yUjEMC_P0TK1SU",
    authDomain: "mychat10.firebaseapp.com",
    projectId: "mychat10",
    storageBucket: "mychat10.appspot.com",
    messagingSenderId: "1083547048194",
    appId: "1:1083547048194:web:adfa2968c3d5963cb78a1b"
});

// модуль авторизации
export const auth = firebase.auth();
// База данных
export const firestore = firebase.firestore();