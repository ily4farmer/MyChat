



import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Form/Form';
import firebase from 'firebase';

export default function Login() {

    const dispatch = useDispatch();
    const form = useSelector(state => state.form),
          email = form.email.emailValue,
          password = form.password.passwordValue;

    const loginUser = (e) => {
        e.preventDefault();
        // Создание нового польователя
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                // Signed in 
                return response;
                // ...
            })
            .catch((error) => {
                console.log('Error: ' + error.toString());
            });
        form.email.emailValue = '';
        form.password.passwordValue = '';
        dispatch({type: "state", payload: form});
    }

    const titleValue = 'Войти';

    return (
        <Form title={titleValue} methodForm={loginUser}/>
    )
}
