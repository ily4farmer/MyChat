



import React from 'react'
import { auth } from '../../Firebase';
import './Navbar.sass';

export default function Navbar({user}) {
    
    return (
        <header className="header">
            <div className="container">
                <div className="header-block">
                    <div className="header__logo">MyChat</div>
                    {user ? 
                     <button onClick={()=> auth.signOut()} className="header__button btn">Выйти</button>
                    :
                    // если пользователь авторизован, тогда появляется кнопка выйти 
                        <button className="header__button btn">Логин</button>
                    }
                </div>
            </div>
        </header>
    )
}
