import React, { useState } from "react";
import Input from "./Input";
import Submit from "./Submit";
import Title from "./Title";
function App() {
  const [useButton,setUseButton]=useState("Hello");
  const [handleChageInput, setHandleChangeInput]=useState("");
  const handleClick=()=>{
    setUseButton("Clicked");
  };
  const handleChange = function(event){
    console.log(event.target.value);
  };
  return (
    <div className="container">
      <Title title={useButton}/>
      <Input />
      <Submit handleClick={handleClick}/>
    </div>
  );
}
export default App;