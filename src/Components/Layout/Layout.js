



import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { publicRouter, privatRouter } from '../../Routers/Index';
import { chatRouter, homeRouter } from '../../Routers/Utils';
import Loader from '../Loader/Loader';

export default function Layout({user, loading}) {
    
    if (loading) {
        return <Loader/>
    }

    return user ?
        <Switch>
                {
                    privatRouter.map(({path, component}) => {
                        return (
                            <Route key={path} path={path} component={component} exact={true}/>
                        )
                    })
                }
                <Redirect to={chatRouter}/>
            </Switch>
        :
        <Switch>
        {
            publicRouter.map(({path, component}) => {
                return (
                <Route key={path} path={path} component={component} exact={true}/>
                )
            })
        }
            <Redirect to={homeRouter}/>
        </Switch>
}
