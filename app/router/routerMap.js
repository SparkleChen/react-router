import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from '../container/home/index'
import { Body } from '../components/body/index'
import { Header } from '../components/header/index'
import { Footer } from '../components/footer/index'
import { NotFound } from '../components/notFound/index'
import { App } from '../container/app';

//路由 render方式渲染
const NotFounded = ({component:Component, ...rest}) =>{
return (<Route {...rest} render={
    props => (
             <Component {...props}></Component>       
    )}/>
)}
      


export class RouterMap extends React.Component {
    render() {
        return (
            <App>        
            <Switch>
                <Route exact path = "/" component ={ Home } ></Route>    {/* 路由component 方式渲染 */}
                <Route exact path = "/header" component ={ Header } ></Route>
                <Route exact path = "/body" component ={ Body } ></Route>
                <Route exact path = "/footer/:id"  component ={ Footer } ></Route>
                <NotFounded path='/not' component={ NotFound }></NotFounded>
            </Switch>
            </App>   
        );
    }
}