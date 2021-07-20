import React, { useState }  from 'react';
import './App.css';
const TodoListItem = (props) =>{
    const { text, id,onSelect } = props
    
    
    console.log(props)
    return(
    <>
    <li key={id}><b> {text} </b>
    </li>
    <button className ='removeBtn'onClick={
        onSelect(id)
        }>X</button>
    </>
    )
}
export default TodoListItem;