import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn : false
        }
    }

    render() {
        
        //Short Circuit Operator - If left is true then it evaluates the right otherwise not
        // return this.state.isLoggedIn && <div>Welcome Bhavik</div>

        //Approach 3 :- Using Ternary Operator
        return(
            this.state.isLoggedIn ? 
            <div>Welcome Bhavik</div> :
            <div>Welcome Guest</div>
        )
        
        //Approach 2 :- Using appropriate element variable
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Bhavik</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }

        //Approach 1 :-
        // return message
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Bhavik</div>
        // }
        // else{
        //     return <div>Welcome Guest</div>
        // }

    }
}

export default UserGreeting