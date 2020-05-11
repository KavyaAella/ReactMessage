import React from 'react';
import Username from './UserName';
function App1(){
   
    const inputref = React.useRef(null);
    const ref = React.useRef(null);
    function clickHandler() {
        ref.current.changeValue(inputref.current.value)
    }
    return (
      <div>
        <button onClick={clickHandler}>Change Username</button>
        <input type= "text" ref = {inputref} />
        <Username ref = {ref}/>
      </div>
    );
  }
  export default App1;