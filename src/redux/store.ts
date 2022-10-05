import { rootReducer } from "./reducers/rootReducer";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";


export const store = createStore(rootReducer, applyMiddleware(thunk));

export type State = ReturnType<typeof rootReducer>;