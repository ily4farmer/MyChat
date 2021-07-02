



import React from 'react'
import './Burger.sass';
import { auth } from '../../Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { chatRouter, customizationRouter, infoRouter } from '../../Routers/Utils';

export default function Burger() {
    const dispatch = useDispatch();
    const {visible} = useSelector(state => state.burger)
    console.log(visible);
    let none = 'burger'

    const burgerHandler = () => {
        dispatch({type: "state", payload: false});
    }

    if (!visible) {
        none = 'none';
    }

    return (
        <div className={none}>
            <div onClick={burgerHandler} className="burger__btn">    
                X
            </div>
            <ul className="burger__list">
                <li className="burger__link">
                    <Link to={chatRouter}>Чат</Link>
                </li>
                <li className="burger__link">
                    <Link to={infoRouter}>Информация</Link>
                </li>
            </ul>
            <button onClick={()=> auth.signOut()} className="header__button btn">Выйти</button>
        </div>
    )
}
