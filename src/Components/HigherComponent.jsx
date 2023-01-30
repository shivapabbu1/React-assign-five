import React from "react";
import { useState } from "react";

const HigherComponent=(WrappedComponent)=>{
    function HigherComponent() {
        const [Counter,setCounter]=useState(0);
        const UpdateCounter=()=>{
            setCounter(Counter+1)
        }
      return (
        <div>
            <WrappedComponent Counter={Counter} UpdateCounter={UpdateCounter}/>
        </div>
      )
    }
    return HigherComponent;
}
    
export default HigherComponent