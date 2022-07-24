import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

    render() {
        const {name,count,increamentCount} = this.props;
        return (
        <button onClick={increamentCount}>{name} Clicked {count} Times</button>
        )
    }
}

export default withCounter(ClickCounter,5)