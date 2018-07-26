import React from 'react'
import { Link, Route } from 'react-router-dom'

//路由 children 方式渲染
const LinkItem = ({to,...rest}) => {
    return(
    <Route path={ to } children={ ({ match }) => {
        return(
            match ? (<li><Link to="header" {...rest}></Link></li>) 
                    :  (<li><Link to="body" {...rest}></Link></li>) 
        )          
    }}></Route>
  )
}

export class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h1>我是主页.</h1>
                <p>{this.props.location.state ? this.props.location.state.some : ""}</p>
                <ul>
                    <li><Link to="/header">到头部</Link></li>
                    <li><Link to="/body">到内容</Link></li>
                    <li><Link to="/footer/2">到脚部</Link></li>
                    <LinkItem to="/">children 渲染</LinkItem>
                </ul>
            </div>
        )
    }
}