export const ProductListReducer = ( state = { products : [] }  , action ) => {
    switch (action.type) {
        case "PRODUCT_LIST_REQEST":
            return { loading : true , products : [] }
        case "PRODUCT_LIST_SUCCESS":
            return { loading : false , products : action.payload }
    
        default:
            return state
    }
}

export const ProductListDetail = ( state = { product : {} } , action ) => {
    switch (action.type) {
        case "PRODUCT_DETAIL_REQEST":
            return { loading : true , ...state }
        case "PRODUCT_DETAIL_SUCCESS":
            return { loading : false , product : action.payload }
    
        default:
            return state
    }
}