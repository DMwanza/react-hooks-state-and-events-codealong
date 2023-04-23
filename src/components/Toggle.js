import React,{useState} from "react";


function Toggle() {
  const [switchh,setSwitch]=useState(false)
  function Switch(){
    setSwitch((switchh)=>!switchh)
  }
  const color=switchh?"red":"white"
  
  return <button style={{background:color}} onClick={Switch}>{switchh?"ON":"OFF"}</button>;
}

export default Toggle;
