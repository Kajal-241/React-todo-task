import { combineReducers } from "redux"
import todoReducer from './todoReducer'


const rootReducer = combineReducers({
    todoItems: todoReducer,
    
});
export default rootReducer;