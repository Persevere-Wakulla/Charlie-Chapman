import { useRef, useEffect, useState } from "react";

// ! useRef practice

const UseRef = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log('Component Rendering');
  });

  const handleClick1 = () => {
   inputRef1.current.focus()
   inputRef1.current.style.backgroundColor = "yellow"
   inputRef2.current.style.backgroundColor = ""
   inputRef3.current.style.backgroundColor = ""
   
  };
  const handleClick2 = () => {
   inputRef2.current.focus()
    inputRef1.current.style.backgroundColor = ""
    inputRef2.current.style.backgroundColor = "yellow"
    inputRef3.current.style.backgroundColor = ""
 
  };
  const handleClick3 = () => {
   inputRef3.current.focus()
    inputRef1.current.style.backgroundColor = ""
    inputRef2.current.style.backgroundColor = ""
    inputRef3.current.style.backgroundColor = "yellow"
 
  };

  return(
    <div>
  <button onClick={handleClick1}>Click Me 1!</button>
  <input type="text" ref={inputRef1}/>
  <button onClick={handleClick2}>Click Me 2!</button>
  <input type="text" ref={inputRef2}/>
  <button onClick={handleClick3}>Click Me 3!</button>
  <input type="text" ref={inputRef3}/>
  </div>
)
};
export default UseRef;
