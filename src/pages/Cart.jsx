import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";
import { getcartitembyemailid, updatecart } from '../redux/action';
import Loader from '../components/Loader';
import { deletecart} from '../redux/action';
const Cart = () => {
    const[cartobj , setCartobj]=useState({
        id:null , quantity:null
    })
    const[price , setPrice] = useState(null)
    const dispatch = useDispatch()
    const { user } = useAuth0();
    const { cart, isloading } = useSelector((state) => state.cart)
    useEffect(() => {
        window.scrollTo(0,0)
        user && dispatch(getcartitembyemailid(user.email))
    }, [user])
    useEffect(()=>{
      cart &&  setPrice(cart.map((item)=> item.quantity*item.price).reduce(function(acc , i){
             return acc + i
        },0))
    },[cart])
    useEffect(()=>{
       cartobj.id && cartobj.quantity && 
       dispatch(updatecart(cartobj))
        dispatch({
            type:"getitem",
            payload:cart.map((item)=>item._id===cartobj.id ? {...item , quantity:cartobj.quantity} : item)
        })
      
    },[cartobj])
    const deletecartitem = (id)=>{
        dispatch({
            type:"getitem",
            payload:cart.filter((item)=>item._id!==id)
        })
        dispatch(deletecart(id))
    }

    return (
        <>
        {isloading? <Loader/>: <div className=' xl:flex xl:justify-center sm:mt-16'>
           <div className='xl:w-[80rem] px-3'>
                <h1 className=' text-lg'>Total {cart.length} items!!</h1>
                {cart.length===0 && <div className='h-[90vh]'></div>}
                {cart.length!==0 &&<div>
                    <div className=' cartcontainer flex flex-col gap-5 mt-4 '>
                        {cart.length !== 0 && cart.map((cartitem, index) => <div key={index} className="cartitem flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-start sm:justify-between">
                            <div className="cartimgandtitle">
                                <img src={cartitem.img} alt="" className=' rounded sm:max-w-[10rem] lg:max-w-[20rem]' />
                                <h2 className='mt-2'>{cartitem.title}</h2>
                            </div>
                            <div className="quantityandremovebutton">
                                <div className="quantitbtns flex items-center gap-3">
                                    <button className=' bg-black text-white px-2 py-1 rounded' onClick={cartitem.quantity>1? ()=>setCartobj({id:cartitem._id , quantity:cartitem.quantity-1}) : null}>-</button>
                                    {cartitem.quantity}
                                    <button className=' bg-black text-white px-2 py-1 rounded' onClick={()=>setCartobj({id:cartitem._id , quantity:cartitem.quantity+1})}>+</button>
                                </div>
                                <button className=' bg-red-400 rounded text-white px-4 py-1 mt-2' 
                                onClick={()=>deletecartitem(cartitem._id)}>Remove</button>
                            </div>
                        </div>)}

                    </div>
                    <div className="my-4 pt-2 totalprice flex justify-between items-center border-0 border-t-2 border-black border-solid ">
                        <h2>Total Price</h2>
                      {price &&  <p>${price}</p>} 
                    </div>
                    <div className="chenckoutbtn flex justify-end">
                        <button className='rounded text-xl bg-black text-white px-4 py-1'>Checkout</button>
                    </div>
                </div> }
            </div> 
        </div>}
        </>
    )
}

export default Cart
