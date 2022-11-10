import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, } from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
const { data } = await axios.get(`/api/v1/products/${id}`);


const cartData = data.data.product;

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: cartData.productId,
      name: cartData.name,
      images: cartData.images,
      price: cartData.price,
      countInStock: cartData.countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const removeFromCart= (id)=> (dispatch,getState)=>{
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}

