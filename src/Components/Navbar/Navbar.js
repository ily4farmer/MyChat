



import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../Firebase';
import Burger from '../Burger/Burger';
import './Navbar.sass';

export default function Navbar({user}) {
    const [burger, setBurger] = useState(false);
    const dispatch = useDispatch()
    function burgerVisible() {
        dispatch({type: "state", payload: true});
    }
    return (
        <header className="header">
            <div className="container">
                <div className="header-block">
                    <div className="header__logo">MyChat</div>
                    {user ? 
                    //  <button onClick={()=> auth.signOut()} className="header__button btn">Выйти</button>
                    <nav onClick={burgerVisible} className="header__button">
                        <div className="header__btn">
                            <span/>
                        </div>
                    </nav>
                    :
                    // если пользователь авторизован, тогда появляется кнопка выйти 
                        <button className="header__button btn">Логин</button>
                    }
                </div>
            </div>
        </header>
    )
}
