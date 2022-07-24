import React, { Component } from 'react'

class RegCompo extends Component {
    render(props) {
        console.log("Regular Component Render")
        return (
        <div>
            RegCompo {this.props.name}
        </div>
        )
    }
}

export default RegCompo