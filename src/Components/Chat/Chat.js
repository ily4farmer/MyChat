



import React from 'react';
import './Chat.sass';

export default function Chat() {
    return (
        <section className="chat">
            <div className="container">
                <div className="chat-block">
                    <div className="chat__window"></div>
                    <div className="chat__footer">
                        <input type="text" className="chat__input" />
                        <button className="chat__btn btn">Отправить</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
