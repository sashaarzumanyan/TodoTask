import { combineReducers } from "redux";
import { configReducer } from "./configsReducer";
import { editTodo } from "./editReducer";
import todoReducer from "./reducer";

export const reducer=combineReducers({
    todoList: todoReducer,
    config: configReducer,
    editTodo: editTodo,
})