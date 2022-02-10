import { EUserActionTypes, TUserAction, IUserState } from "../../Types/user"

const initialState:IUserState = {
    users: [],
    loading: false,
    error: null,
}

export const userReducer = (state=initialState, action: TUserAction):IUserState => {
    switch (action.type) {
        case EUserActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case EUserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case EUserActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state
    }
}