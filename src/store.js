import { createStore , combineReducers , applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { ProductListReducer , ProductDetailReducer } from './reducer/ProductReducer'

const reducer = combineReducers({
    ProductListReducer : ProductListReducer ,
    ProductDetailReducer : ProductDetailReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer , initialState , applyMiddleware(...middleware))

export default store