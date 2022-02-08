import React from "react";

import { ITodo } from "../../Types/data";

interface ITodoItem extends ITodo {
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const {id, title, complete, toggleTodo, removeTodo} = props

  const htmlId: string = id.toString()
 
  return (
    <div>
        <input 
            type='checkbox' 
            checked={complete} 
            onChange={() => toggleTodo(id)}
            id={htmlId}
        />
        <label htmlFor={htmlId}>{title}</label>
        <button onClick={()=> removeTodo(id)}>x</button>
    </div>
  );
};

export default TodoItem;