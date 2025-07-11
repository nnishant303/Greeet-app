import React, { useState } from 'react';
import './App.css';

function App() {

  const [name , set_name] = useState('');
  const [greet , set_greet] = useState(false);

  function change_name(e){
    set_name(e.target.value);
  }

  function greet_change(){
    if(name.trim() !== ""){
      set_greet(true);
    };
  };

  function reset(){
    set_greet(false);
    set_name('');
  }


  return(
    <div className='App'>
    <h1>Greet Message App</h1>

    <input
    type='text'
    placeholder='Enter Your Name'
    value={name}
    onChange={change_name}
    />
    <br/>

    <button onClick={greet_change}>Greet Message</button>
    <button onClick={reset}>Reset</button>
    
    {greet && <h2>Hello, {name} !</h2>}
    
    </div>
  
  )
}

export default App;
