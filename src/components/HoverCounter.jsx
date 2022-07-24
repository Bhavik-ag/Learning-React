import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         count : 0
    //     }
    // }

    // increamentCount = ()=>{
    //     this.setState(prevState=> {
    //         return {count : prevState.count + 1}
    //     })
    // }

    //Both constructor and increamentCount method are shared by HigherOrderComponent with the help of props - WithCounter

    render() {
        const {count,increamentCount} = this.props;
        return (
            <div>
                <h2 onMouseOver={increamentCount}>Hover {count} Times</h2>
            </div>
        )
    }
}

export default withCounter(HoverCounter,10)