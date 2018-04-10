import React from 'react'

export class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>这是一个react-router example
                {
                    this.props.children
                }
            </div>
        )
    }
}