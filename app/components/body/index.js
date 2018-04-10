import React from 'react'

export class Body extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick(){
        this.props.history.push({pathname:"/",state:{some:"我来自内容"}})
    }
    render() {
        return (
            <div>
                <h1>我是内容.</h1>
                <p onClick={this.handleClick.bind(this)}>从内容返回内容</p>
            </div>
        )
    }
}