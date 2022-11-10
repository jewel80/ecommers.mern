import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, productListReducer, productreviewCreateReducer,  } from './reducers/productReducers'

const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    productReviewCreate : productreviewCreateReducer,
    cart : cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse
(localStorage.getItem('cartItems')) : []

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse
(localStorage.getItem('shippingAddress')) : {}

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse
(localStorage.getItem('userInfo')) : null

const initialState = {
    cart :{cartItems: cartItemsFromStorage ,shippingAddress: shippingAddressFromStorage},
    userLogin: { userInfo : userInfoFromStorage },
}

const middelware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middelware))
    )

export default store