import React, { useState, useRef, useEffect } from "react";

import { ITodo } from "../../Types/data";

import TodoList from "../TodoList";

const App: React.FC = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const addTodo = () => {
    if(value){
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false,
      }])
    }
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if(e.key === 'Enter'){
      addTodo()
    }
  }

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) {
        return todo
      }
      return {...todo, complete: !todo.complete}
    }))
  }

  useEffect(()=> {
    if(inputRef.current){
      inputRef.current.focus()
    }
  },[])

  return (
    <div>
      <div>
        <input value={value} onChange={handleChange} ref={inputRef} onKeyDown={handleKeyDown}/>
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  );
};

export default App;