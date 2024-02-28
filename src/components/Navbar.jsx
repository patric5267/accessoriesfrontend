import React, { useEffect, useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import shopping from '../assets/shopping.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";
import { routes } from '../Extras/Brand';
import { useDispatch, useSelector } from 'react-redux';
import { getcartitembyemailid } from '../redux/action';

const Navbar = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state.cart)
    const location = useLocation()    
    const { user, logout, loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  
    const navigate = useNavigate()
    const [show, setShow] = useState("-100vw")
    useEffect(()=>{
       user && dispatch(getcartitembyemailid(user.email))
    },[user])
    return (
        <div className='nav bg-white  xl:flex xl:justify-center sticky top-0 z-30 sm:fixed w-full  '>
            <div className="xl:w-[80rem] navbar  flex justify-between items-center py-3 lg:py-3 px-3 text-xl md:text-lg ">
                <a href="#home"> <div onClick={() => navigate('/')} className="logo flex items-center">
                    <img src={shopping} alt="" className=' w-10 h-10' />
                    <h1>ShoppingCart</h1>
                </div></a>
                <ul style={{ right: show }} className='listofcategories2 pl-3  py-4 md:py-0 md:pl-0 flex md:items-center bg-black text-white md:bg-transparent md:text-black gap-4 md:gap-9 cursor-pointer fixed w-[15rem]  md:w-auto  top-0 h-full flex-col  md:flex-row md:static'>
                  {routes.map((routes,index)=>
                    routes.route==='/cart' ? user && <Link key={index} to={routes.route}> <li><p style={location.pathname===routes.route ? {backgroundColor:"black" , color:"white"} : {}} className='py-1 rounded px-2 hover:bg-white hover:text-black  md:hover:bg-black md:hover:text-white inline-block'>{routes.name}&nbsp;({cart.length})</p></li> </Link>:<Link key={index} to={routes.route}> <li><p style={location.pathname===routes.route ? {backgroundColor:"black" , color:"white"} : {}} className='py-1 rounded px-2 hover:bg-white hover:text-black  md:hover:bg-black md:hover:text-white inline-block'>{routes.name}</p></li> </Link>
                  )}
                 
                    <li className='relative lists'>
                        <p className='py-1 rounded px-2 hover:bg-white hover:text-black  md:hover:bg-black md:hover:text-white inline-block'>Categories</p>
                        <div className=" listofcatgories absolute bg-black text-white md:text-black border-white  md:bg-white border-2 md:border-black border-solid ">
                            <ul className=' flex flex-col gap-2 text-base cursor-pointer'>
                                <a href="#smartphones"><li className='hover:bg-white hover:text-black md:hover:bg-black md:hover:text-white pl-4 pr-6 py-1'>Smartphones</li></a>
                                <a href="#laptops"><li className='hover:bg-white hover:text-black md:hover:bg-black md:hover:text-white pl-4 pr-6 py-1'>Laptops</li></a>
                                <a href="#fragrances"><li className='hover:bg-white hover:text-black md:hover:bg-black md:hover:text-white pl-4 pr-6 py-1'>fragrances</li></a>
                                <a href="#skincare"><li className='hover:bg-white hover:text-black md:hover:bg-black md:hover:text-white pl-4 pr-6 py-1'>skincare</li></a>
                                <a href="#furniture"> <li className='hover:bg-white hover:text-black md:hover:bg-black md:hover:text-white pl-4 pr-6 py-1'>furniture</li></a>

                            </ul>
                        </div>

                    </li>
                    <li className='md:hidden absolute bottom-4 flex  items-center gap-2'>
                      {user?  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}  className='font-xs bg-blue-600  text-white rounded px-3 py-1'>Logout</button> :  <button onClick={() => loginWithRedirect()} className='font-xs bg-white text-black   rounded px-3 py-1 flex items-center gap-1'>Login <FcGoogle/></button> }
                        <p >or</p> 
                        <button className=' bg-blue-600  text-white rounded px-4 py-1' onClick={() => setShow("-100vw")}>Close</button>
                    </li>
                </ul>
                {isLoading ? <div className="dot-spinner hidden md:block">
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                </div> : <div>{isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className=' active:bg-blue-400 bg-blue-600 hidden md:block text-white rounded px-4 py-1'>Logout</button> : <button onClick={() => loginWithRedirect()} className=' active:bg-blue-400 bg-black hidden  text-white rounded px-4 py-1 md:flex items-center gap-1'>Login <FcGoogle/></button>
                }</div>}
                <button onClick={() => setShow("0")} className=' md:hidden'>
                    <MdOutlineMenu />
                </button>
            </div>
        </div>

    )
}

export default Navbar
