import { createStore } from "redux";
import todoReducer from "./reducers/reducer";
import { reducer } from './reducers/indexReducers'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducer, composeWithDevTools())

export default store