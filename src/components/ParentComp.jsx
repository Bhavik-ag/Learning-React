import React, { Component } from 'react'
import RegCompo from './RegCompo'
import PureCompo from './PureCompo'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "Bhavik"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name : "Bhavik"
            })
        },2000)
    }
    
    render() {
        console.log("Parent Component Render")
        return (
        <div>
            ParentComponent
            <MemoComp name={this.state.name}></MemoComp>
            {/* <RegCompo name={this.state.name}></RegCompo>
            <PureCompo name={this.state.name}></PureCompo> */}
        </div>
        )
    }
}

export default ParentComp