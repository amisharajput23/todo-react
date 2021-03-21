import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Todolist from './Todolist';

const { v4: uuidv4 } = require('uuid');
const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App() {
  const [todos, setTodos ] = useState([{ id: 1, name: 'Todo1', complete: false}])
const todoNameRef = useRef()
 
useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

  if (storedTodos) setTodos(storedTodos)
}, [])

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos])


function toggleTodo(id){
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete =!todo.complete
  setTodos(newTodos)
}
  function handleAddTodo(e){
  const name = todoNameRef.current.value
  if (name === '') return
  setTodos(prevTodos => {
    return[...prevTodos, {id:1, name: name, complete:false}]
  })
  todoNameRef.current.value = null
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  return (
    <>
  <Todolist  todos ={todos} toggleTodo={toggleTodo}/>
  <input  ref={todoNameRef}type ="text"></input>
  <button onClick={handleAddTodo}>Add todo</button>
  <button onClick={handleClearTodos}>Clear complete</button>
  <div>{todos.filter(todo => !todo.complete).length} left todo</div>
  </>
  );
}

export default App;
