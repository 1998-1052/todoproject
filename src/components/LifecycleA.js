import React from "react";
import LifecycleB from "./LifecycleB";
export class LifecycleA extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'manisha'
        }
        console.log('LifecycleA constructor')

    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
    return null
    }
    ComponentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    render(){
        console.log('LifecycleA render')
        return(<div> 
            <div>LifecycleA</div>
            <LifecycleB />
            </div>
        )
    }
}
export default LifecycleA