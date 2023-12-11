import axios from "axios"

export const AddToCart = (id) => async (dispatch , getState) => {
    try {
        const { data } = await axios.get(`http://localhost:8000/api/products/${id}`)

        dispatch({ 
            type : "CART_ADD_ITEM" , 
            payload : {
                id : data._id ,
                name : data.name ,
                image : data.image ,
                price : data.price
            }
         })

         localStorage.setItem("cartItems" , JSON.stringify(getState().cart.cartItems))

        
    } catch (error) {
        console.log(error)
    }
}

export const RemoveFromCart = (id) => (dispatch , getState) => {
    try {
        dispatch({ type : "CART_REMOVE_ITEM" , payload : id })

        localStorage.setItem('cartItems' , JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log(error)
    }
}