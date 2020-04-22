import { combineReducers } from "redux";
import { api } from "./api";
import { albums } from "./albums";
import NameSpace from "@/redux/reducers/name-spaces";

const rootReducer = combineReducers(
  {
    [NameSpace.ALBUM]: albums,
    [NameSpace.API]: api,
  }
);

export { rootReducer }
