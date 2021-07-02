


import Home from "../Components/Home/Home";
import Chat from '../Components/Chat/Chat';
import { chatRouter, homeRouter, infoRouter } from './Utils';
import Info from "../Components/Info/Info";


export const publicRouter = [
    {
        path: homeRouter,
        component: Home
    }
]


export const privatRouter = [
    {
        path: chatRouter,
        component: Chat
    },
    {
        path: infoRouter,
        component: Info
    }
]


