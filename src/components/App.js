import React,{Component} from "react"
import "../App.css"
// import LifecycleA from "./LifecycleA"
import LifecycleA1 from "./LifecycleA1"
import FragmentDemo from "./FragmentDemo"
import App1 from "./App1"
// import Table from "./Table"

class App extends Component {
    render(){
        return(
            <div className="App">
                <App1/>
                {/* <Table/> */}
                {/* <FragmentDemo/> */}
                {/* <LifecycleA/> */}
                {/* <LifecycleA1/> */}
            </div>
        )
    }
}
export default App