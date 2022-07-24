import React from 'react'
import Person from './Person'

function NameList() {

    // const persons = [
    //     {id:1,name:"Bhavik",age:"18"},
    //     {id:2,name:"Raghav",age:"16"},
    //     {id:3,name:"Punita",age:"37"}
    // ]

    const names = ['Bhavik','Raghav','Narendra','Punita','Bhavik']
    const nameList = names.map((name,index) => <h2 key={index}>{name}</h2>)
    // const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (<div>{nameList}</div>)
}

export default NameList