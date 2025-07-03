import { createStore } from "redux";
import { reducerfn } from "./reducer";

export let store = createStore(reducerfn)