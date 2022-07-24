import React, {Component} from "react";

class Welcome extends Component{

    render(){
        const {name,about} = this.props;
        return (
            <h1>Hello, {name} About:- {about}</h1>
        )
    }
}

export default Welcome