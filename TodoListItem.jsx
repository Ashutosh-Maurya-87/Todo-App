import React  from 'react';

const TodoListItem = (props) =>{
    return(
    <>
    <li key={props.index}><b> {props.text} </b>
    </li>
    </>
    )
}
export default TodoListItem;