import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addcartitem } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Product = (props) => {
    const { user } = useAuth0();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const{cart} = useSelector((state)=>state.cart)
    const{id , thumbnail, title, price, description, discountPercentage, stock} = props.item
    const addcart = (cartitem)=>{ 
        const findduplicate = cart.filter((item)=>item.title===cartitem.title)
        if(findduplicate.length===0){
            dispatch(addcartitem(cartitem))
        }
        else{
            alert("Item already added in cart")
        }
     }
    return (
        <div className="item flex flex-col items-start gap-1 w-full    ">
         <img src={thumbnail} alt="" className=' rounded   min-w-full    ' />
            <h2 className='text-xl '>{title}</h2>
            <p>{description.slice(0, 40)}...</p>
            <div className="pricesection flex items-center gap-2">
                <p>${price}</p>
                <p className=' line-through'>${discountPercentage}</p>
                <p className=' bg-red-500 rounded text-white px-2 py-2 text-sm'>{stock} in stock</p>
            </div>
            <div className="mt-4 orderoptions flex flex-row gap-2">
                <button className=' bg-black text-white px-4 py-2 rounded' onClick={user ? () => addcart({ email: user.email, title:title , price:price , quantity:1 , img:thumbnail  }) : () => alert("Need to login")}>Add to cart</button>
                <button className=' bg-blue-500 text-white px-4 py-2 rounded' onClick={user ? () =>
                                    
                                    navigate(`/checkout/${title}/${id}/1`)   : () => alert("Need to login")}>Buy Now</button>
            </div>
        </div>
    )
}

export default Product
