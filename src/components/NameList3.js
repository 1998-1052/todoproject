import React from "react";
import NameList from "./NameList";
import Person from "./Person";
function NameList3(){
    const names = ['Bruce' , 'Clarck' ,'Diana', 'Bruce']
    // const person = [
        // const nameList = names.map(name => <h2>key={name}</h2>)
        const nameList = names.map((name, index) =><h2 key={index}>{index} {name}</h2> )
        return <div>{nameList}</div>
    }
    export default NameList3;