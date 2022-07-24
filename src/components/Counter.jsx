import React, {Component} from "react";

class Counter extends Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    Increament(){
        // this.setState({
        //     count : this.state.count + 1
        // },()=>{
        //     console.log("Callback Value: ", this.state.count)
        // })

        this.setState((prevState,props)=>({
            count : prevState.count + 1
            // count : prevState.count + props.addValue
        }))
        console.log(this.state.count)
    }

    IncreamentFive(){
        this.Increament()
        this.Increament()
        this.Increament()
        this.Increament()
        this.Increament()
    }
    render(){
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=> this.IncreamentFive()}>Increament</button>
                
            </div>
        )
    }
}

export default Counter  