



import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Form/Form';
import firebase from 'firebase';

export default function Login() {

    const dispatch = useDispatch();
    const form = useSelector(state => state.form),
          email = form.email.emailValue,
          password = form.password.passwordValue,
          [error, setError] = useState('')

    const loginUser = (e) => {
        e.preventDefault();
        // Создание нового польователя
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                // Signed in 
                setError('')
                return response;
                // ...
            })
            .catch((error) => {
                console.log('Error: ' + error.toString());
                setError('Пользователь не найден')
            });
        form.email.emailValue = '';
        form.password.passwordValue = '';
        dispatch({type: "state", payload: form});
    }

    const titleValue = 'Войти';

    return (
        <Form title={titleValue} setError={setError} error={error} methodForm={loginUser}/>
    )
}
