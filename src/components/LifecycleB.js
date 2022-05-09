import React from "react";
export class LifecycleB extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'manisha'
        }
        console.log('LifecycleB constructor')

    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
    return null
    }
    ComponentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    render(){
        console.log('LifecycleB render')
        return <div>LifecycleB</div>
        return (
            <div>

            </div>
        )
    }
}
export default LifecycleB