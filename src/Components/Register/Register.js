import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Form from '../Form/Form';
import firebase from 'firebase'

export default function Register() {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form),
          email = form.email.emailValue,
          password = form.password.passwordValue,
          [error, setError] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        // Создание нового польователя
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                // Signed in 
                setError('')
                return response;
                // ...
            })
            .catch((error) => {
                console.log('Error: ' + error.toString());
                setError('Пароль меньше 6 символов или невалидная почта')
            });
          form.email.emailValue = '';
          form.password.passwordValue = '';
          dispatch({type: "state", payload: form});
    }

    const titleValue = 'Регистрация';

    return (
        <Form title={titleValue} setError={setError} error={error} methodForm={createUser}/>
    )
}