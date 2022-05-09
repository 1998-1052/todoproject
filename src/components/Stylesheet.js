import React from "react";
import './myStyle.css'
function Stylesheet(props){
    let className = props.primary ? 'primary' : ''
    return(
        <div>
{/* <h1 className="primary">Stylesheet</h1> */}
{/* <h1 className= {className}>Stylesheets</h1> */}
<h1 className= {`${className} font-xl`}>Stylesheets</h1>
  
        </div>
    )
}
export default Stylesheet