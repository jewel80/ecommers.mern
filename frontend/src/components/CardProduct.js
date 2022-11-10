import { Image } from "@chakra-ui/react"
import { React, useEffect, useState } from 'react'
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/all"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from "../actions/cartActions"
import Rating from './Rating'
const CardProduct = ({ product }) => {
    const [showbtn, setShowbtn] = useState(false)
    const [Incart, setIncart] = useState(false)
    const dispatch = useDispatch();
    const Cart = useSelector(state => state.cart)
    const { cartItems } = Cart
    useEffect(() => {
        const isincart = cartItems.find(x => x.product === product.productId);
        if (isincart) {
            setIncart(true);

        }
        return () => {

        }
    },)
    const addcart = () => {
        setIncart(true);
        dispatch(addToCart(product.productId, 1))
    }

    return (
        <>
            <div className='cardProduct' onMouseOver={() => { setShowbtn(true) }}
                onMouseLeave={() => { setShowbtn(false) }}>
                <div className='imgDiv'>
                    <Image className='imgProduct' boxSize='350px' objectFit='cover' src={product.images[0]} />
                </div>
                <div className='bottomcard'>
                    <Link to={`/product/${product.productId}`} exact  >
                        <p><span>{product.name}</span></p>
                    </Link>
                    
                    {Incart ? <HiShoppingCart className="iconFav" size='26' /> : <HiOutlineShoppingCart className="iconFav" color='#999' size='26' onClick={addcart} />}

                    <div className='productpricecard'> {`${product.price} ৳`}</div>
                    <div className='Rating'>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />

                    </div>


                </div>

                <Link to={`/product/${product.productId}`} exact >
                    <button className={showbtn ? 'QuickView QuickViewActive' : 'QuickView'}> View Details</button>
                </Link>
            </div>
        </>

    )
}

export default CardProduct
