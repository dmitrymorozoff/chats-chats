import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
const initialReducer = (state = { title: "chats chats" }) => state;

export const rootReducer = combineReducers({
    form: formReducer,
    initialReducer,
});
