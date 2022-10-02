import { combineReducers, createStore } from "redux";
import {carReducer} from "./reducers/carReducer"

// setup store ruducer
const rootReducer = combineReducers({
    carReducer
})

export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())