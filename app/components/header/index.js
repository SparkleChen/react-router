import React from 'react'

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        console.log("组件装载已经完成");
    }
    componentDidUpdate(){
        console.log("被重新渲染了");
    }
    componentWillUnmount(){
        console.log("被卸载了");
    }

    handleClick() {
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <h1>我是头部.</h1>
                <p onClick={this.handleClick}>从头部返回内容</p>
            </div>
        )
    }
}