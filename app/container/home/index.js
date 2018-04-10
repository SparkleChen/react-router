import React from 'react'
import { Link } from 'react-router-dom'

export class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h1>我是主页.</h1>
                <p>{this.props.location.state?this.props.location.state.some:""}</p>
                <ul>
                    <li><Link to="/header">到头部</Link></li>
                    <li><Link to="/body">到内容</Link></li>
                    <li><Link to="/footer/2">到脚部</Link></li>
                </ul>
            </div>
        )
    }
}