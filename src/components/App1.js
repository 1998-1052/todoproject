import React,{Component} from "react";
import '../App.css'
import FocusInput from "./FocusInput";
import FRParentInput from "./FRParentInput";
import ParentComp from "./ParentComp";
import PureComp from "./PureComp";
import RefsDemo from "./RefsDemo";
class App1 extends Component {
    render(){
        return(
            <div className="App">
                <FRParentInput/>
                {/* <FocusInput/> */}
                {/* <RefsDemo/> */}
                {/* <ParentComp/> */}
                {/* <PureComp/> */}
            </div>
        )
    }
}
export default App1