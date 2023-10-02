import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import ProductReducer from "./reducer/ProductReducer"
import DetailReducer from "./reducer/DetailReducer"
import CartReducer from "./reducer/CartReducer"

const reducer = combineReducers({
    productList : ProductReducer ,
    detail : DetailReducer ,
    cart : CartReducer
})

const cartItemsFromLocalStorage = localStorage.getItem("cartItems") 
? JSON.parse(localStorage.getItem("cartItems")) : []  

const initialState = {
    cart : { cartItems : cartItemsFromLocalStorage}
}

const middleware = [thunk]

const store = createStore(reducer , initialState , applyMiddleware(...middleware))

export default store