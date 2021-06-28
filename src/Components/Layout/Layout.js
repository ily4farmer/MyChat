



import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { publicRouter, privatRouter } from '../../Routers/Index';
import { chatRouter, homeRouter } from '../../Routers/Utils';
import Loader from '../Loader/Loader';
import Burger from '../Burger/Burger';

export default function Layout({user, loading}) {
    
    if (loading) {
        return <Loader/>
    }

    return user ?
        <Fragment>
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
            <Burger/>
        </Fragment>
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
