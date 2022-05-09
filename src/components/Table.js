import React from "react";
import Columns from './Columns'
import Columns1 from "./Columns1";
import Columns2 from "./Columns2";
 function Table(){
     return(
            
         <table>
             <tbody>
                 <tr>
                     <Columns2/>
                     {/* <Columns1/> */}
                  {/* <Columns/>    */}
                 </tr>
             </tbody>
         </table>
         
     )
 }
 export default Table