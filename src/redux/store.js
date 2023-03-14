import { configureStore } from "redux";
import { Reducer } from "./reducer";


const myStore = configureStore(Reducer);

export default myStore;