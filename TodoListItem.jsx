import React, { useState }  from 'react';
import './App.css';
const TodoListItem = (props) =>{
    const { text, index } = props
    const [remove,setRemove]=useState('');
    const removeFunc = () =>{
        setRemove((text)=>{
            
            console.log('remove',text)
        })

    }
    // Learning Object destructuring-------------------------------------
    // const objects = {
    //     fruits : {
    //        apple:{
    //         banana : {
    //             lichi: '40 /kg',
    //             guavava: '50 /kg'
    //         }
    //        }
    //     }
    // }
    
// console.log('object destruncting', objects && objects.fruits && objects.fruits.apple && objects.fruits.apple.banana  && objects.fruits.apple.banana.guavava)

// console.log('object destruncting', objects?.fruits?.apple?.banana?.guavava)

// const { fruits: {apple: { banana:{ lichi = ''} = {} } = {}} = {} } = objects;
// console.log('destructuring', lichi)
    return(
    <>
    <li key={index}><b> {text} </b>
    </li>
    <button className ='removeBtn'onClick={removeFunc}>{remove}x</button>
    </>
    )
}
export default TodoListItem;