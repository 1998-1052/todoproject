import React from "react";
function NameList(){
    const names = ['Bruce','Clarck',Dina]
    const NameList = names.map(name => <h2>{name}</h2>)
    return(
        <div>{NameList
// names.map(name => <h2>{name}</h2>)
         } </div>
    )
}