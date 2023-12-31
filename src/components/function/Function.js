import React from "react";
import {
    useState,
    useRef
  } from "react"; 

const Functions = () => {
    const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  //plus function
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value));
  }; 
 
  //minus function
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  }; 
  
 
  //times function
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 

 
  //division function
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  }; 
 
  //resetting input text
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = 0;  
  }; 
 
  //resetting the result
  function resetResult(e) { 
  	e.preventDefault();
    setResult((result) => result * 0 );
    inputRef.current.value = 0; 
  }; 
    return (
        <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
      <p ref={resultRef}> 
          {result} 
      </p>
      <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button> 
      </form>

    </div>
    );
}

export default Functions;