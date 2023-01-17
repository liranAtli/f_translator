import {combineReducers} from "redux";
import usersReducers from "./usersReducers";


const reducers = combineReducers({
    users: usersReducers,

});

export default reducers;

export type RootState = ReturnType<typeof reducers>;