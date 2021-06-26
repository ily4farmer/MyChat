import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { formReducer } from "./formReducer";


// Объединение всех имеющихся reducer
const reducer = combineReducers({
    form: formReducer
})



export const store = createStore(reducer, composeWithDevTools())