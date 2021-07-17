import React,{useState} from 'react';
import './App.css';

function App() {
  const [btn,setBtn]=useState(' ');
  const [item,setItem]=useState(' ');
  // onclick button function-------------
  const addFunc = () =>{
    setBtn(item)
  }
  // input text event function-------
  const eventFunc =(event) =>{
    setItem(event.target.value);
  }
  return(
    <>
    <h2>hi</h2>
    <h1> Todo List</h1>
    <input
    type='text'
    placeholder='enter the item'
    onChange={eventFunc}
    value={item.btn}
    />
    <button onClick={addFunc}>+</button>
    <h3>
      {btn}</h3>
    </>
  )
  
}

export default App;
