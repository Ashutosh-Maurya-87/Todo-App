import React, { useState }  from 'react';
import './App.css';
const TodoListItem = (props) =>{
    const { text, id,onSelect,rem } = props
    
    
    console.log(props)
    return(
    <>
    <li key={id}><b> {text} </b>
    </li>
    <button className ='removeBtn'onClick={
        onSelect(id)
        }>{rem}X</button>
    </>
    )
}
export default TodoListItem;