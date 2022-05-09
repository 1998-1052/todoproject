import React from "react";
  export class LifecycleB1 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'manisha'
        }
        console.log('LifecycleB1 constructor')

    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB1 getDerivedStateFromProps')
    return null
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    
    shouldComponentUpdate(){
        console.log('LifecycleB1 shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB1 getSnapshotBeforUpdate')
    }
    componentDidUpdate(){
        console.log('LifecycleB1 componentDidUpdate')
    }
    render(){
        console.log('LifecycleB1 render')
        return <div>LifecycleB1</div>
        return (
            <div>

            </div>
        )
    }
}
export default LifecycleB1