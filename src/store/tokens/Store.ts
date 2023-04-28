import { tokenReducer } from "./TokensReducer"
import { createStore } from "redux"

const store = createStore(tokenReducer)

export default store