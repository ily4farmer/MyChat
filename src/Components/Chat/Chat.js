



import React, { useState } from 'react';
import './Chat.sass';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore } from '../../Firebase';
import Loader from '../Loader/Loader';
import firebase from 'firebase';

export default function Chat() {
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    // Хук для получения сообщений
    const [message, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async() => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.email,
            text: value,
            // дата отправки сообщений
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('');
    }

    if (loading) {
       return <Loader/> 
    }

    return (
        <section className="chat">
            <div className="container">
                <div className="chat-block">
                    <div className="chat__window">
                        {
                            message.map(item =>
                                <div className="message" key={item.createdAt}
                                style={{marginLeft: user.uid === item.uid ? "auto" : "10px"}}>
                                    <div className="message__name">{item.displayName}</div>
                                    <div className="message__text">{item.text}</div>
                                </div>
                            )
                        }
                    </div>
                    <div className="chat__footer">
                        <input value={value} onChange={e => setValue(e.target.value)} type="text" className="chat__input" />
                        <button onClick={sendMessage} className="chat__btn btn">Отправить</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
