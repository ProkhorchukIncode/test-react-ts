import React, {useEffect} from "react";
import { useActions } from "../../Hooks/useActions";

import TodoItem from "../TodoItem";
import { Loader } from "../Loader";
import { Error } from "../Error";

import { ITodo } from "../../Types/data";
import { useTypedSelector } from "../../Hooks/useTypedSelector";

interface ITodoListProps {
    items: ITodo[],
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
}

const pages = [1,2,3,4,5]

const TodoList: React.FC<ITodoListProps> = ({items, toggleTodo, removeTodo}) => {
    const {page, error, limit, loading, todos} = useTypedSelector((state)=> state.todo)
    const {fetchTodos, setTodoPage} = useActions() 
    
    useEffect(()=> {
        fetchTodos(page, limit)
    },[page])

    const {fetchUsers} = useActions()

    useEffect(()=> {
        fetchUsers()
    },[])

  return (
    <div>
        <h2>Your todos</h2>
        {items.map(todo => {
                return <TodoItem 
                    key={todo.id} 
                    removeTodo={removeTodo} 
                    toggleTodo={toggleTodo}
                    deleted
                    {...todo}
                />
            })}
        <h2>Our todos</h2>
        {loading ? (<Loader/>) 
        :
        <>
            {error ? <Error/> 
            :
            <>
            {todos.map(todo => {
                return <TodoItem 
                    key={todo.id} 
                    removeTodo={removeTodo} 
                    toggleTodo={toggleTodo}
                    {...todo}
                />
            })}
            <div>
                {pages.map(p => {
                    return <button 
                        key={p}
                        onClick={() => setTodoPage(p)}
                    >{p}</button>
                })}
            </div>
            </>
            }
        </>
        }
    </div>
  );
};

export default TodoList;