import React from 'react'
function Columns1(){
    const items = []
    return(
          <React.Fragment>
              {
                  items.map( item =>(
                      <div key={item.id}>
                          <h1>Title</h1>
                          <p>{item.title}</p>
                      </div>
                  ))
}
            <td>Name</td>
            <td>Manisha</td>
        </React.Fragment> 
    )
}

 export default Columns1