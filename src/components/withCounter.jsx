import React from "react";

//Higher OrderComponent - UpdatedComponent
//Takes OriginalComponent, add more functionalities, enchance it and returns NewComponent

const withCounter = (WrappedComponent,increamentNumber) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count : 0
            }
        }
    
        increamentCount = ()=>{
            this.setState(prevState=> {
                return {count : prevState.count + increamentNumber}
            })
        }

        render(){
            return <WrappedComponent count={this.state.count} increamentCount={this.increamentCount} {...this.props}/>
        }
    }

    return WithCounter
}

export default withCounter