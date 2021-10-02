import React,{ useState } from 'react'
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import './todo.css';

const Todo = () => {

    const [ input , setInput ] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducers.list);

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
        <i className = "fa fa-plus add-btn" onClick={() => dispatch(addTodo(input),
                                                            setInput(' '))}></i>

        </div>
      </div>
      <div className = "showItems">
        {
        list.map((e) => {
          return(
            <div className = "eachItem" key = {e.id} >
            <h3>{e.data}</h3>
            <div className = "todo-btn">
          <i className = "far fa-trash-alt add-btn" onClick={() => dispatch(deleteTodo(e.id))}></i>
                                                              
          </div>
          </div>
          )
          
        })
      }
   </div>
      
      
    </div>   
    )
}

export default Todo;
