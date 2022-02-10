import axios from "axios"
import { Dispatch } from "react"
import { ETodoActionTypes, TTodoAction } from "../../Types/todo"

export const fetchTodos = ( page = 1, limit = 10 ) => {
    return async (dispatch: Dispatch<TTodoAction>) => {
        try{
            dispatch({type: ETodoActionTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            dispatch({
                type: ETodoActionTypes.FETCH_TODOS_SUCCESS,
                payload: response.data,
            })
        } catch (err) {
            dispatch({
                type: ETodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'FETCH_TODOS_ERROR'
            })
        }
    }
}

export const setTodoPage = (page: number):TTodoAction => {
    return {type: ETodoActionTypes.SET_TODO_PAGE, payload: page}
}