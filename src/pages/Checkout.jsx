import React, { useEffect, useState } from 'react'
import { getlocationofuser, getproductbyid } from '../utilis/Getitems'
import { useFetcher, useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Loader from '../components/Loader'
const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const { user } = useAuth0()
  const { title, id, quantity } = useParams()
  const [data, setData] = useState(null)
  const [location, setLocation] = useState(null)
  console.log(title);
  useEffect(() => {
    setLoading(true)
    getlocationofuser().then((res) => {
      setLoading(false)
      setLocation(res)
    })
  }, [])
  useEffect(() => {
    id && getproductbyid(id).then((res) => setData(res))
  }, [id])
  return (
    <>
      {
        loading ? <Loader /> : <div className=' xl:flex xl:justify-center'>
          <div className=' xl:w-[80rem] sm:flex sm:flex-col sm:justify-center sm:h-[100vh]'>
            <div className=' px-3 sm:flex  sm:justify-center sm:gap-28  sm:items-center '>
              <div className="useraddress flex flex-col gap-1 lg:text-2xl">
                <h1>Deliever To :</h1>
                {user && <h2>{user.given_name}</h2>}
                {location && <address>{location.name} , {location.region}, {location.country}</address>}
                {user && <h2>{user.email}</h2>}
              </div>
              {data && <div className='mt-4 sm:mt-0 '>
                <div className="productimage  ">
                  <h1 className=' sm:text-2xl mb-2'>Product Details</h1>
                  <img src={data.thumbnail} alt="" className=' rounded w-full sm:w-[20rem]  ' />
                </div>
                <div className=" descriptionofproduct mt-2 flex flex-col  items-start gap-3   ">
                  <h2 className='text-xl  underline'>{data.title} x {quantity} </h2>
                  <div className="pricesection flex items-center gap-2 text-xl lg:text-base">
                    <p>${data.price}</p>
                    <p className=' line-through'>${data.discountPercentage}</p>
                    <p className=' text-red-500 rounded font-bold px-2 py-2 text-sm lg:text-xl'>{data.stock} in stock</p>
                  </div>


                </div>
              </div>}

            </div>
            <div className=' sm:flex sm:justify-center sm:items-center sm:flex-col'>
              <div className="my-4 pt-2 mx-3 sm:w-[32rem]  lg:w-[42rem] totalprice flex justify-between items-center border-0 border-t-2 border-black border-solid ">
                <h2>Total Price</h2>
                {data && <p>${data.price * quantity}</p>}
              </div>
              <div className="chenckoutbtn flex justify-end mx-3 sm:w-[32rem] lg:w-[42rem] ">
                <button className='rounded text-xl bg-black text-white px-4 py-1'>Checkout</button>
              </div>
            </div>

          </div>
        </div>
      }

    </>
  )
}

export default Checkout
