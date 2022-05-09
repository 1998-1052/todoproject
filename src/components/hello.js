import React from "react"
const hello = () =>{
    // return(
        // <div>
        // <div className='dummyClass'>

            // <h1>hello manisha</h1>
        // </div>
    // )
    // return React.createElement('div', null, '<h1>hello manisha</h1>')
    // return React.createElement('div', null,'h1', 'hello manisha')
    // return React.createElement('div', null, React.createElement('h1', null, 'hello manisha'))
return React.createElement(
'div',
// null,
// {id: 'hello', class: 'dummyClass'},
{id: 'hello', className: 'dummyClass'},

React.createElement('h1',null,'hello manisha')    
)

}
export default hello;