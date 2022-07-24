import React from  'react'

//Destructuring the props
// const Greet = ({name,heroName})=> {
const Greet = props => {
    // console.log(props);
    const {name,heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {/* {props.children} */}
        </div>
    )
}

export default Greet