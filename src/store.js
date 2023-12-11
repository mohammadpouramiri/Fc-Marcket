import { createStore , combineReducers , applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { ProductListReducer , ProductListDetail } from "./reducer/productReducer/ProductReducer"
import { CartReducer } from "./reducer/cartReducer/CartReducer"

const reducer = combineReducers({ 
    ProductList : ProductListReducer ,
    ProductDetail : ProductListDetail ,
    cart : CartReducer
 })

const cartItemsFromLocalStroage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const initialState = {
    cart : {cartItems : cartItemsFromLocalStroage}
}

const middleware = [thunk]

const store = createStore(reducer , initialState , applyMiddleware(...middleware))

export default store