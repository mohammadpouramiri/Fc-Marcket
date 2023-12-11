import axios from "axios"

export const ProductListAction = () => async (dispatch) => {
    try {
        dispatch({ type : "PRODUCT_LIST_REQEST" })

        const { data } = await axios.get('http://localhost:8000/api/products')

        dispatch({ type : "PRODUCT_LIST_SUCCESS" , payload : data })
    } catch (error) {
        console.log(error)
    }
}

export const ProductDetailAction = (id) => async (dispatch) => {
    try {
        dispatch({ type : "PRODUCT_DETAIL_REQEST" })

        const { data } = await axios.get(`http://localhost:8000/api/products/${id}`)

        dispatch({ type : "PRODUCT_DETAIL_SUCCESS" , payload : data })
    } catch (error) {
        console.log(error)
    }
}