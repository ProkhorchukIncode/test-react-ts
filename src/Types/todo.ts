export interface ITodoState {
    todos: any[];
    loading: boolean;
    error: string | null;
    page: number;
    limit: number;
}

export enum ETodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
}
export interface IFetchTodos {
    type: ETodoActionTypes.FETCH_TODOS;
}
interface IFetchTodosSucces {
    type: ETodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}
interface IFetchTodosError {
    type: ETodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}
interface ISetTodoPage {
    type: ETodoActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type TTodoAction = 
    IFetchTodos 
    | IFetchTodosSucces 
    | IFetchTodosError
    | ISetTodoPage