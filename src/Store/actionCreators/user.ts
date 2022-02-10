import axios from "axios"
import { Dispatch } from "react"
import { EUserActionTypes, TUserAction } from "../../Types/user"

export const fetchUsers = () => {
    return async (dispatch: Dispatch<TUserAction>) => {
        try{
            dispatch({type: EUserActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({
                type: EUserActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data,
            })
        } catch (err) {
            dispatch({
                type: EUserActionTypes.FETCH_USERS_ERROR,
                payload: 'FETCH_USERS_ERROR'
            })
        }
    }
}