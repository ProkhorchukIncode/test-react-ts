import React from "react";

import TodoItem from "../TodoItem";

import { ITodo } from "../../Types/data";

interface ITodoListProps {
    items: ITodo[],
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const {items, toggleTodo, removeTodo} = props;

  return (
    <div>
        {props.items.map(todo => {
            return <TodoItem 
                key={todo.id} 
                removeTodo={removeTodo} 
                toggleTodo={toggleTodo}
                {...todo}
            />
        })}
    </div>
  );
};

export default TodoList;