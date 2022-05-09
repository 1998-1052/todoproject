import React from "react";
import Person from "./Person";
function NameList2(){
    const person = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        { id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
             },
             { 
                id: 3,
                name: 'Diana',
                age: 28,
                skill: 'Vue'
             }
    ]
    // const PersonList = person.map(person => <h2> I am {person.name}.I am {person.age} years old. I know{Person.skill}</h2>)
//    const PersonList = Person.map(Person => <Person Person ={Person}/>)
// const PersonList = Person.map(Person => <Person  key ="unique" Person ={Person}/>)
const personList = person.map(person => <Person key ={person.id} person ={person}/>)


    return <div>{personList}</div>
}
export default NameList2