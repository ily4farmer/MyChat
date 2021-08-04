



import React from 'react'
import { useDispatch } from 'react-redux';
import './Navbar.sass';

export default function Navbar({user}) {
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
