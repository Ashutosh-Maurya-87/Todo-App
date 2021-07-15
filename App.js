import logo from './logo.svg';
import React,{useState} from 'react';
import { ReactDOM } from 'react';
import './App.css';


function App() {
  //const btnNew='Mango';
  const [btn,setBtn]=useState(' ');
  const [item,setItem]=useState(' ');

  // onclick button function-------------
  const addFunc = () =>{
    setBtn(item)
    console.log('you click + button')
  }
  // input text event function-------
  const eventFunc =(event) =>{
    //setBtn(event.target.value)
    setItem(event.target.value);
    //console.log(event.target.value);
    
  }
  
  return(
    <>
    <h1> Todo List</h1>
    <input
    type='text'
    placeholder='enter the item'
    onChange={eventFunc}
    value={item.btn}
    />
    <button onClick={addFunc}>+</button>
    <h3>{btn}</h3>
    </>
  )
  
}

export default App;
