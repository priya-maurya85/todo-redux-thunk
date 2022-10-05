import {combineReducers } from "redux";
import todoReducer from "./mainReducer";

export const rootReducer = combineReducers({todoData: todoReducer})