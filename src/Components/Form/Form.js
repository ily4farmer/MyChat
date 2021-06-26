



import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Form.sass';



export default function Form({title, methodForm}) {

    const dispatch = useDispatch();
    const form = useSelector((state) => state.form);

    const formValidation = (e) => {
        let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let formControls = {...form};

        switch (true) {
          case (e.target.type === 'email'):
            if (regexEmail.test( e.target.value)) {
                    formControls.email.emailValue = e.target.value;
                    dispatch({type: "state", payload: formControls});
                } else {
                    formControls.email.emailValue = '';
                    dispatch({type: "state", payload: formControls});
                }
                break;

            case (e.target.type === 'password'):
                if (e.target.value.length > 6) {
                    formControls.password.passwordValue = e.target.value;
                    dispatch({type: "state", payload: formControls});
                } else {
                    formControls.password.passwordValue = '';
                    dispatch({type: "state", payload: formControls});
                }
                break;
          default:
                break;
        }
    }

    return (
        <form action="#" className="form" onSubmit={methodForm}>
            <h2 className="form__template">{title}</h2>
            {
                Object.keys(form).map((item) => {
                    return (
                        <label key={item}>
                            <label className="form__label">{form[item].label}</label>
                            <input onChange={(e) => formValidation(e)} type={form[item].type} className="form__input" required/>
                        </label>
                    );
                })
            }
            <input type="submit" placeholder="Регистрация" className="form__input-btn btn" />
        </form>
    )
}
