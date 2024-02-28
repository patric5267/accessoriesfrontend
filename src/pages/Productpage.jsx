import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getproductbyid } from '../utilis/Getitems'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { addcartitem } from '../redux/action'
import { useAuth0 } from "@auth0/auth0-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';

import 'swiper/css';

const Productpage = () => {
  const navigate = useNavigate()
  const { cart } = useSelector((state) => state.cart)
  const { user } = useAuth0();
  const dispatch = useDispatch()
  const { id } = useParams()
  const [loading, setLoading] = useState()
  const [product, setProduct] = useState(null)
  const [productimg, setProductimg] = useState(null)
  const [count, setCount] = useState(1)
 
  useEffect(() => {
    setLoading(true)
    getproductbyid(id).then((res) => {
      setLoading(false)
      setProduct(res)
    })
  }, [id])
  useEffect(() => {
    window.scrollTo(0,0)
    product && setProductimg(product.images[0])
  }, [product])
  const addcart = (cartitem) => {
    const findduplicate = cart.filter((item) => item.title === cartitem.title)
    if (findduplicate.length === 0) {
      dispatch(addcartitem(cartitem))
    }
    else {
      alert("Item already in cart")
    }
  }
  
  if(loading || !product){
    return <Loader/>
  }
  else{
    return (
      <>
        {product && productimg && <div className=' xl:flex xl:justify-center md:h-[100svh]'>
          <div className='px-3 xl:w-[80rem] sm:flex sm:flex-row sm:items-center md:justify-evenly  sm:h-[100vh] gap-4 md:mt-4 '>
            <div className="productimage  sm:order-2 sm:w-[50%] md:w-[40%] lg:w-[30%] ">
              <img src={productimg} alt="" className=' rounded w-full sm:max-h-[18rem] sm:w-[17rem] md:w-[100%]' />
              <div className="listofimages mt-4">
                <ul className='image flex items-end gap-2 '>
                <Swiper 
                    modules={[Autoplay]}
                    spaceBetween={10}
                    loop={true}
                    slidesPerView={3}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    >
                  {product.images.map((image, index) => 
                   
                   <SwiperSlide key={index}> <li  onClick={() => setProductimg(image)}><img className=' h-20 min-w-[6rem]' src={image} alt="error" /></li> </SwiperSlide> 

                  )}
                    </Swiper>
                </ul>
              </div>
            </div>
            <div className="mb-5 sm:mb-0 descriptionofproduct mt-2 flex flex-col  items-start gap-3 sm:gap-4 sm:order-1 sm:w-[50%]  ">
              <h2 className='text-xl lg:text-4xl underline'>{product.title}</h2>
              <p className='text-lg'>{product.description}</p>
              <div className="pricesection flex items-center gap-2 text-xl">
                <p>${product.price}</p>
                <p className=' line-through'>${product.discountPercentage}</p>
                <p className=' text-red-500 rounded font-bold px-2 py-2 text-sm lg:text-xl'>{product.stock} in stock</p>
              </div>
              <div className='quantiyoptions flex items-center gap-2'>
                <p>QTY</p>
                <div className="btns flex items-center gap-3">
                  <button className=' bg-black text-white px-2 py-1 rounded' onClick={count !== 0 ? () => setCount((count) => count - 1) : null}>-</button>
                  {count}
                  <button className=' bg-black text-white px-2 py-1 rounded' onClick={() => setCount((count) => count + 1)}>+</button>
                </div>
              </div>
              <div className="orderoptions flex flex-row gap-2">
                <button className=' bg-black text-white px-4 py-2 rounded' onClick={user ? () => addcart({ email: user.email, title: product.title, quantity: count, img: product.thumbnail, price: product.price }) : () => alert("Need to login")}>Add to cart</button>
                <button className=' bg-blue-500 text-white px-4 py-2 rounded' onClick={user ? () =>
  
                  navigate(`/checkout/${product.title}/${product.id}/${count}`) : () => alert("Need to login")}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>}
      </>
    )
  }
  
}

export default Productpage
