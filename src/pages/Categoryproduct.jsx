import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getallproductsbycategory } from '../utilis/Getitems'
import { useAuth0 } from "@auth0/auth0-react";
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addcartitem } from '../redux/action';

const Categoryproduct = () => {
    const {user} = useAuth0()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const{cart} = useSelector((state)=>state.cart)
    const[loading , setLoading]= useState(false)
    const[data , setData]=useState([])
    const { categoryitem } = useParams()
    useEffect(()=>{
        setLoading(true)
        categoryitem && getallproductsbycategory(categoryitem).then((res)=>{
            setLoading(false)
            setData(res.products)
        })
    },[categoryitem])
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
        <>
        {loading ? <Loader/>: <div className='xl:flex xl:justify-center sm:mt-20'>
           <div className='xl:w-[80rem] px-3'>
                <h1 className=' lg:text-2xl mb-2'>{`Category > ${categoryitem} > ${data.length} items found`}</h1>
                <div className="itemscon grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 ">
                    {data.map((products, index) => <div key={index} className=' items '>
                        <div className="productimage  ">
                            <img src={products.thumbnail} alt="" className=' rounded w-full  ' onClick={()=>navigate(`/product/${products.id}`)}/>
                        </div>
                        <div className=" descriptionofproduct mt-2 flex flex-col  items-start gap-3   ">
                            <h2 className='text-xl  underline'>{products.title}</h2>
                            <p>{products.description.slice(0, 40)}...</p>
                            <div className="pricesection flex items-center gap-2 text-xl lg:text-base">
                                <p>${products.price}</p>
                                <p className=' line-through'>${products.discountPercentage}</p>
                                <p className=' text-red-500 rounded font-bold px-2 py-2 text-sm lg:text-xl'>{products.stock} in stock</p>
                            </div>

                            <div className="orderoptions flex flex-row gap-2 lg:text-sm">
                                <button className=' bg-black text-white px-4 py-2 rounded' onClick={user ? () => addcart({ email: user.email, title:products.title , price:products.price , quantity:1 , img:products.thumbnail  }) : () => alert("Need to login")} >Add to cart</button>
                                <button className=' bg-blue-500 text-white px-4 py-2 rounded' onClick={user ? () =>
                                    
                                 navigate(`/checkout/${products.title}/${products.id}/1`)   : () => alert("Need to login")}>Buy Now</button>
                            </div>
                        </div>
                    </div>)}

                </div>
            </div> 
        </div>}
        </>
    )
}

export default Categoryproduct
