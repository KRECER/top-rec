import { combineReducers } from "redux";
import { api } from "./api";
import { albums } from "./albums";

const rootReducer = combineReducers({api, albums});

export { rootReducer }
