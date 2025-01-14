import axios from "axios";
import { API_URL } from "../../helper";

export const getCartAction = () => {
    return async (dispatch) => {
        try {
            let token = localStorage.getItem('data');
            if (token) {
                let res = await axios.get(`${API_URL}/transactions/carts`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                dispatch({
                    type: "GET_DATA_CART",
                    payload: res.data.dataCart
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const addToCartAction = (data) => {
    return async (dispatch) => {
        try {
            let token = localStorage.getItem('data')
            if (token) {
                let res = await axios.post(`${API_URL}/transactions/carts`, data, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                if (res.data.success) {
                    dispatch(getCartAction())
                    return { success: true, message: "Add to cart success" }
                } else {
                    return { success: false, message: "Stock sudah habis" }
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const updateQtyActions = (id, qty) => {
    return async (dispatch) => {
        try {
            let token = localStorage.getItem('data');
            if (token) {
                let res = await axios.patch(`${API_URL}/transactions/carts/${id}`, {
                    qty
                }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                if (res.data.success) {
                    dispatch(getCartAction())
                    return { success: true, message: 'Qty updated' }
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteCartActions = (idcart) => {
    return async (dispatch) => {
        try {
            let token = localStorage.getItem('data')
            if (token) {
                let res = await axios.delete(`${API_URL}/transactions/carts/${idcart}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                if (res.data.success) {
                    dispatch(getCartAction())
                    return { success: true, message: 'Delete Cart Success' }
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const getTransactionsActions = () => {
    return async (dispatch) => {
        try {
            let token = localStorage.getItem('data')
            if (token) {
                let res = await axios.get(`${API_URL}/transactions/usertransactions`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                if (res.data.success) {
                    dispatch({
                        type: "GET_TRANSACTIONS",
                        payload: res.data.dataTransaction
                    })
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

}