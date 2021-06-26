



import React, { useState } from 'react';
import './Home.sass';
import Login from '../Login/Login';
import Register from '../Register/Register';

export default function Hone() {

    const [switches, seTswitches] = useState(true);

    return (
        <section className="home">
            <div className="container">
                <div className="home-block">
                    <h1 className="home__title">MYCHAT</h1>
                    {/* Переключение с формы логина на регистрацию */}
                    {switches ? <Login/> : <Register/>}
                    <div className="home__footer">
                        <div className="home__link" style={switches ? {fontWeight: "bold"} : {fontWeight: "normal"}} onClick={() => seTswitches(true)}>Войти</div>
                        <div className="home__link" style={switches ? {fontWeight: "normal"} : {fontWeight: "bold"}} onClick={() => seTswitches(false)}>Регистрация</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
