import { combineReducers } from '@reduxjs/toolkit'
import {userReducer} from "../entities/user/model/userSlice.ts";


export const rootReducer = combineReducers({
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
