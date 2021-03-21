import React, { useState, useRef } from 'react';
import './App.css';
import Todolist from './Todolist';

function App() {
  const [todos, setTodos ] = useState([{ id: 1, name: 'Todo1', complete: false}])
const todoNameRef = useRef()
  function handleAddTodo(e){
  const name = todoNameRef.current.value
  if (name === '') return
  todoNameRef.current.value = null
  }
  return (
    <>
  <Todolist  todos ={todos}/>
  <input  ref={todoNameRef}type ="text"></input>
  <button onClick={handleAddTodo}>Add todo</button>
  <button>Clear complete</button>
  <div>0 left todo</div>
  </>
  );
}

export default App;
