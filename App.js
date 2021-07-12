import logo from './logo.svg';
import React,{useState} from 'react';
import { ReactDOM } from 'react';
import './App.css';


function App() {
  const btnNew='Mango';
  const [btn,setBtn]=useState({
         itemFirst:' '
  });
  const [item,setItem]=useState(' ');
  const addFunc = () =>{
    setBtn((preValue)=>{
      console.log(preValue);
    })
    console.log('you click')
    console.log(btnNew);
  }
  const eventFunc =(event) =>{
    setItem(event.target.value)
    const value=event.target.value;
console.log(value)
  }
  
  return(
    <>
    <h1> Todo List</h1>
    <input
    type='text'
    placeholder='enter the item'
    onChange={eventFunc}
    value={btn}
    />
    <button onClick={addFunc}>+</button>
    <h3>{btnNew}</h3>
    </>
  )
  
}

export default App;
