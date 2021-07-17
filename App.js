import React,{useState} from 'react';
import './App.css';

function App() {
  const [btn,setBtn]=useState(' ');
  const [item,setItem]=useState([]);
  // onclick button function-------------
  const addFunc = () =>{
    setBtn((olditem)=>{
return [...olditem,btn]
    })
    
  }
  console.log('this is item', {item})
  console.log('this is btn ', {btn})
  // input text event function-------
  const eventFunc =(event) =>{
    setBtn(event.target.value);
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
  <h2>{item}</h2>
    {/* <ol>
    {
      item.map((itemval)=>
      {
        return <li>{itemval}</li>
      })
    }
    </ol> */}
    </>
  )
  
}

export default App;
