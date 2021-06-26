


import Home from "../Components/Home/Home";
import Chat from '../Components/Chat/Chat';
import { chatRouter, homeRouter } from './Utils';


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
    }
]


