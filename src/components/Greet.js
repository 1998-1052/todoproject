import React from 'react'
// function Greet(){
    // return<h1>hello manisha</h1>
// }

// export const Greet = () =><h1>hello manisha</h1>
//  const Greet = (props) =>{
 const Greet = ({name,heroName}) =>{

    // console.log(props);
    // props.name = 'manisha'
/* <h1>hello manisha</h1> */
return (
    <div>
{/* <h1>hello {props.name} a.k.a {props.heroName}</h1> */}
<h1>Hello {name} a.k.a {heroName}</h1>
{/* {props.children} */}
</div>
)

}
 export default Greet 
