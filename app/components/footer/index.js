import React from 'react'

export class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <h1>我是脚部.{this.props.match.params.id}</h1>
    }
}