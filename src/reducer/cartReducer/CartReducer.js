export const CartReducer = ( state = { cartItems : [] } , action ) => {
    switch (action.type) {
        case "CART_ADD_ITEM":
            const item = action.payload    
            
            const existingItem = state.cartItems.find(i => i.id === item.id)

            if(existingItem) {
                return{
                    ...state ,
                    cartItems : state.cartItems.map(i => i.id === existingItem.id ? item : i)
                }
            } else {
                return {
                    ...state ,
                    cartItems : [...state.cartItems , item]
                }
            }

            case "CART_REMOVE_ITEM":
            return{
                ...state ,
                cartItems : state.cartItems.filter(i => i.id !== action.payload)
            }
    
        default:
            return state
    }
}