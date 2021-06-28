import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { burgerReducer } from "./burgerReducer";
import { formReducer } from "./formReducer";


// Объединение всех имеющихся reducer
const reducer = combineReducers({
    form: formReducer,
    burger: burgerReducer
})



export const store = createStore(reducer, composeWithDevTools())