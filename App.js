import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.production.min';

function App() {
  const [change,setChange]=useState(
    {
      enter:" "
    }
  );
setChange((preValue)=>{
  console.log(preValue)
})
  const addEvent = (event) =>{

    console.log(event.target.value)
  }
  return(
    <>
    <h1> Todo List</h1>
    <input
    type='text'
    placeholder='enter the item'
    onChange={addEvent} 
    vlaue={change.enter}
    />
    <button >+</button>
    </>
  )
  
}

export default App;
