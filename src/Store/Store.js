 
import { createStore } from "redux";
import { reducerfn } from "../Reducer/reducer";
 

export let store = createStore(reducerfn)