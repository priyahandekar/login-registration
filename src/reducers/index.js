import {combineReducers} from "redux";
import loginRegister from "./loginRegister.reducer";
import events from "./events.reducer";

const rootReducer = combineReducers({
    loginRegister,
    events
});

export default rootReducer;