import React,{ useState } from 'react'
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import { useDispatch } from 'react-redux';
import './todo.css';

const Todo = () => {

    const [ input , setInput ] = useState('');
    const dispatch = useDispatch();


    return (
        <div className="main-div">
      <div className = "child-div">
        <figure>
          <figcaption>Add : </figcaption>
        </figure>
        <div className = "add-items">
          <input type = 'text'
                 placeholder = "add to do"
                 value = { input }
                 onChange = {(e)=>{setInput(e.target.value)}}
                 />
        <i className = "fa fa-plus add-btn" onClick={() => dispatch(addTodo(input))}></i>

        </div>
      </div>
      
    </div>   
    )
}

export default Todo;
