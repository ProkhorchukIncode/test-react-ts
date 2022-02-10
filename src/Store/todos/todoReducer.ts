import { ITodoState, TTodoAction, ETodoActionTypes } from "../../Types/todo";

const initialState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const todoReducer = (state: ITodoState = initialState, action: TTodoAction): ITodoState => {
    switch (action.type) {
        case ETodoActionTypes.FETCH_TODOS:
            return {...state, loading: true}
        case ETodoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case ETodoActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case ETodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
} 