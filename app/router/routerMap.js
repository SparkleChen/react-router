import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { App } from '../container/app'
import { Home } from '../container/home/index'
import { Body } from '../components/body/index'
import { Header } from '../components/header/index'
import { Footer } from '../components/footer/index'
import { NotFound } from '../components/notFound/index'


export class RouterMap extends React.Component {
    render() {
        return (
            <HashRouter>
               <App>
            <Switch>
                <Route exact path = "/" component ={ Home } ></Route>
                <Route exact path = "/header" component ={ Header } ></Route>
                <Route exact path = "/body" component ={ Body } ></Route>
                <Route exact path = "/footer/:id"  component ={ Footer } ></Route>
                <Route path="/*" component ={ NotFound } ></Route>
            </Switch>
                </App>             
            </HashRouter>
        );
    }
}