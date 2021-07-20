import React, { useState }  from 'react';
import './App.css';
const TodoListItem = (props) =>{
    const { text, index,onSelect,rem } = props
    
    
    console.log(props)
    return(
    <>
    <li key={index}><b> {text} </b>
    </li>
    <button className ='removeBtn'onClick={onSelect}>{rem}X</button>
    </>
    )
}
export default TodoListItem;