


import Home from "../Components/Home/Home";
import Chat from '../Components/Chat/Chat';
import { chatRouter, customizationRouter, homeRouter, infoRouter } from './Utils';
import Customization from "../Components/Сustomization/Customization";
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
        path: customizationRouter,
        component: Customization
    },
    {
        path: infoRouter,
        component: Info
    }
]


