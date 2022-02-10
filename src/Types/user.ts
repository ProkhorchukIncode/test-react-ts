export enum EUserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface IUserState {
    users: any[],
    loading: boolean,
    error: null|string,
}

export interface IFetchUsers {
    type: EUserActionTypes.FETCH_USERS,
}
export interface IFetchUsersSuccess {
    type: EUserActionTypes.FETCH_USERS_SUCCESS,
    payload: any[],
}
export interface IFetchUsersError {
    type: EUserActionTypes.FETCH_USERS_ERROR,
    payload: string,
}
export type TUserAction = 
    IFetchUsers 
    | IFetchUsersSuccess 
    | IFetchUsersError