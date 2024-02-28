import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { arr, brand, price } from '../Extras/Brand';
import { getallproducts } from '../utilis/Getitems';
import Loader from '../components/Loader';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
// import { addcartitem } from '../firebaseoperations/operation';
import { useDispatch, useSelector } from 'react-redux';
import { addcartitem } from '../redux/action';
const Allproducts = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useAuth0();
  const { cart } = useSelector((state) => state.cart)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState(null)
  const [productarr, setProductarr] = useState([])
  const [copy, setCopy] = useState([])
  const [filterbox, setFilterbox] = useState("-100vw")
  const [filtervalue, setFiltervalue] = useState({
    brand: null, category: null, min: null, max: null
  })
  const filterfunc = () => {
    if (productarr.length !== 0) {
      const { brand, category, min, max } = filtervalue
      console.log(brand, category, min, max);

      if (brand && category && min && max) {
        console.log(brand, category, min, max);
        setCopy(productarr.filter((item) => item.brand === brand && item.category === category && item.price >= min && item.price < max))
      }
      else if (brand && category) {
        setCopy(productarr.filter((item) => item.brand === brand && item.category === category))
      }
      else if (category && min && max) {
        setCopy(productarr.filter((item) => item.category === category && item.price >= min && item.price < max))
      }
      else if (brand && min && max) {
        setCopy(productarr.filter((item) => item.brand === brand && item.price >= min && item.price < max))
      }
      else if (brand) {
        setCopy(productarr.filter((item) => item.brand === brand))
      }
      else if (category) {
        setCopy(productarr.filter((item) => item.category === category))
      }
      else if (min && max) {
        setCopy(productarr.filter((item) => item.price >= min && item.price < max))
      }
    }
  }

  useEffect(() => {
    window.scrollTo(0,0)
    setLoading(true)
    getallproducts().then((products) => {
      setLoading(false)
      setProductarr(products.products.filter(function (item) {
        if (item.title !== "cereals muesli fruit nuts" && item.title !== "Handcraft Chinese style") {
          return item
        }
      }))
    })
  }, [])

  useEffect(() => {
    if (search) {
      var timer = setTimeout(() => {
        let regexp = RegExp(`${search}`, 'g')
        setCopy(productarr.filter((item) => item.title.match(regexp)))
      }, 1000);
    }
    else {
      setCopy(productarr)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [search, productarr])
  const additem = (item) => {
    const findduplicate = cart.filter((cartitem) => cartitem.title === item.title)
    if (findduplicate.length === 0) {
      dispatch(addcartitem(item))
    }
    else {
      alert("Item already added to cart")
    }
  }
  return (
    <>
      {loading ? <Loader /> : <div className=' xl:flex xl:justify-center sm:mt-20'>

        <div className='xl:w-[80rem] px-3'>

          <div className='parent'>
            <div className="filteroptions mb-4">
              <ul className='flex justify-between items-center  '>
                <li className='relative z-20 '>
                  <input type="text" placeholder='Phones, Laptops..' className=' border-[1px] border-solid border-black outline-none rounded py-1 pl-2 w-44 sm:w-auto' onChange={(e) => setSearch(e.target.value)} />
                  <FaSearch className='absolute right-2 top-[0.6rem]' />
                </li>
                <li className=' '>
                  <button onClick={() => setFilterbox("0")} className=' bg-blue-500 text-white py-1 px-2 rounded'>Filter</button>
                  <form>
                    <div style={{ right: filterbox }} className="px-4 filtercontainer  overflow-auto h-full  flex  flex-col gap-4  rounded bg-white fixed top-0 z-40 my-3">
                      <div className="categoryfilter">
                        <h2 className='text-xl mb-2'>Category</h2>
                        <select name="Category" id="" className=' border-2 border-solid border-black rounded' onChange={(e) => setFiltervalue({ ...filtervalue, category: e.target.value })}>
                          <option value="none" hidden>Select an option</option>
                          {
                            arr.map((i, index) => <option key={index} value={i}>{i}</option>)
                          }


                        </select>
                      </div>
                      <div className="Brandfilter">
                        <h2 className='text-xl mb-2'>Brand</h2>
                        <select name="Category" id="" className=' border-2 border-solid border-black rounded' onChange={(e) => setFiltervalue({ ...filtervalue, brand: e.target.value })}>
                          <option value="none" hidden>Select an option</option>
                          {
                            brand.map((i, index) => <option key={index} value={i.brand}>{i.brand}</option>)
                          }


                        </select>
                      </div>
                      <div className="pricefilter ">
                        <h2 className='text-xl'>Price</h2>
                        {
                          price.map((i, index) => <div key={index} className="priceoptions flex items-center gap-3 my-2">
                            <input type="radio" id={index} name="price" onChange={() => setFiltervalue({ ...filtervalue, min: i.min, max: i.max })} />
                            <label htmlFor={index}>{i.min}-{i.max}</label>
                          </div>)
                        }

                      </div>
                      <div className="resetandapplybtns absolute flex w-full  justify-evenly left-0 bottom-0 pb-5">
                        <button onClick={() => setCopy(productarr)} type='reset' className=' bg-blue-500 active:bg-blue-400 text-white px-4 py-1 rounded'>Reset</button>
                        <button className=' bg-blue-500 text-white px-4 py-1 rounded' onClick={(e) => {
                          e.preventDefault()
                          filterfunc()
                        }} >Apply</button>
                      </div>
                      <div className="close absolute top-0 right-4  ">
                        <button onClick={(e) => {
                          e.preventDefault()
                          setFilterbox("-100vw")
                        }} className=' bg-black text-white rounded text-lg px-1 py-1 '><IoMdClose />
                        </button>
                      </div>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
            <div className='itemsdisplaycontainer'>
              <h1 className=' mb-4 text-lg relative z-[-2]'>{copy.length} items found!!</h1>
              {copy.length === 0 && <div className=' w-full h-[100svh]'></div>}
              {copy.length !== 0 && <div className="itemscon grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 ">
                {copy.map((products, index) => <div key={index} className=' items '>
                  <div className="productimage  ">
                    <img src={products.thumbnail} alt="" className=' rounded w-full' onClick={()=>navigate(`/product/${products.id}`)}/>
                  </div>
                  <div className=" descriptionofproduct mt-2 flex flex-col  items-start gap-3   ">
                    <h2 className='text-xl  underline'>{products.title}</h2>
                    <p className='text-lg lg:text-base'>{products.description}</p>
                    <div className="pricesection flex items-center gap-2 text-xl lg:text-base">
                      <p>${products.price}</p>
                      <p className=' line-through'>${products.discountPercentage}</p>
                      <p className=' text-red-500 rounded font-bold px-2 py-2 text-sm lg:text-xl'>{products.stock} in stock</p>
                    </div>

                    <div className="orderoptions flex flex-row gap-2 lg:text-sm">
                      <button className=' bg-black text-white px-4 py-2 rounded' onClick={user ? () => additem({ email: user.email, title: products.title, quantity: 1, price: products.price, img: products.thumbnail }) : () => alert("need to login")} >Add to cart</button>
                      <button className=' bg-blue-500 text-white px-4 py-2 rounded' onClick={user ? () =>

                        navigate(`/checkout/${products.title}/${products.id}/1`) : () => alert("Need to login")}>Buy Now</button>
                    </div>
                  </div>
                </div>)}

              </div>}
            </div>
          </div>

        </div>
      </div>}

    </>
  )
}

export default Allproducts
