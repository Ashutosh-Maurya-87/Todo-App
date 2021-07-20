import React, { useState } from 'react';

import TodoListItem from './TodoListItem';

function App() {
  const [btn, setBtn] = useState(' ');
  const [item, setItem] = useState([]);
  const [remove, setRemove] = useState('');

  // onclick button function-------------
  const clickFunc = () => {

    setItem((olditem) => {
      return [...olditem, btn]
    })
    setBtn(" ");
    // alert("Your items are added successsfully")
  }

  const eventFunc = (event) => {
    setBtn(event.target.value);
  }

  const removeFunc = (id) => {
    setItem((olditem)=>{
      return olditem.filter((currentData, index)=>{
          return (index !== id)
        
      })
    })
    console.log('re', item);
  }

  return (
    <>
      <h1> Todo List</h1>
      <input
        type="text"
        placeholder="Enter the item"
        value={btn}
        onChange={eventFunc}
      />
      <button onClick={clickFunc}>Add Item</button>


      <ol>
        {
          item.map((itemval, i) => {

            return <TodoListItem
              text={itemval}
              key={i}
              id={i}
              onSelect={removeFunc}
              rem={remove}
            />

          })
        }
      </ol>
    </>
  )

}

export default App;
