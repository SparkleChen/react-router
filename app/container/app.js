import React from 'react'

export class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>this is a react-router example
                {
                    this.props.children
                }
            </div>
        )
    }
}