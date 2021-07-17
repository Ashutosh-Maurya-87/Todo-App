import React,{useState} from 'react';
import './App.css';

function App() {
  const [btn,setBtn]=useState(' ');
  const [item,setItem]=useState([]);
  // onclick button function-------------
  const addFunc = () =>{
    setItem((olditem)=>{
return [...olditem,btn]
    })
  }

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

    <ol>
    {
      item.map((itemval, i)=>
      {
        return <li key={i}>{itemval}
        {console.log('i value', i)}</li>
      })
    }
    </ol>
    </>
  )
  
}

export default App;
