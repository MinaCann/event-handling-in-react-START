import React from "react";
function Input() {
    const handleChange=function(event){
        console.log(event.target.value);
    }
  return (
  <input 
 // onChange={handleChange} 
  type="text" 
  placeholder="What's your name?" 
  />
  );
}
export default Input;
