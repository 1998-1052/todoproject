import React from "react";
import LifecycleB1 from "./LifecycleB1";
export class LifecycleA1 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'manisha'
        }
        console.log('LifecycleA1 constructor')

    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA1 getDerivedStateFromProps')
    return null
    }
    componentDidMount(){
        console.log('LifecycleA1 componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA1 shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA1 getSnapshotBeforUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA1 componentDidUpdate')
    }
    changeState = () => {
        this.state({
            name: 'Codevolution'
        })
    }
    render(){
        console.log('LifecycleA1 render')
        return(<div> 
            <div>LifecycleA1</div>
            <button onClick={this.changeState}>Change state</button>
            <LifecycleB1 />
            </div>
        )
    }
}
export default LifecycleA1