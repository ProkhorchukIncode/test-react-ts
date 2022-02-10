import { combineReducers } from "redux";

import { userReducer } from './user/userReducer'
import { todoReducer } from "./todos/todoReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
})

export type rootReducer = ReturnType<typeof rootReducer>