import React ,{Component} from 'react'
 function  ChildComponent(props) {
   const greetHandler=(childName)=>{
 alert(`Hello  ${childName}`)
   }
      return(
            <div>
{/* <button onClick={props.greetHandler}>Greet Parent</button> */}
<button onClick={() =>
    greetHandler('child class')}>Greet Parent</button>

            </div>
        )
    }

export default ChildComponent  