import React, { useEffect, useState } from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { getalldata } from '../utilis/Getitems';
import { Link } from 'react-router-dom';
import Product from './Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
const Categorylist = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    let phones = []
    let laptops = []
    let frag = []
    let skincare = []
    let furniture = []

    data && data.forEach((i) => {
        if (i.category === "smartphones") {
            phones.push(i)
        }
        else if (i.category === "laptops") {
            laptops.push(i)
        }
        else if (i.category === "fragrances") {
            frag.push(i)
        }
        else if (i.category === "skincare") {
            skincare.push(i)
        }
        else {
            furniture.push(i)
        }
    })

    useEffect(() => {
        setLoading(true)
        getalldata().then((res) => {
            setLoading(false)
            setData(res)
        })
    }, [])

    return (
        <div className='flex flex-col xl:flex xl:justify-center xl:items-center'>
            <div className='xl:w-[80rem] px-3 my-4'>
                <h1 className=' text-2xl lg:text-4xl'>Categories</h1>
                <div className="itemlists mt-2 lg:mt-4">
                    <ul className='secondlists flex gap-3 overflow-auto'>
                        <Link to='/category/smartphones'><li className=' cursor-pointer hover:bg-[#212121] rounded bg-black text-white px-4 py-2'>Smartphones</li></Link>
                        <Link to='/category/laptops'> <li className=' cursor-pointer hover:bg-[#212121] rounded bg-black text-white px-4 py-2'>Laptops</li> </Link>
                        <Link to='/category/fragrances'>  <li className=' cursor-pointer hover:bg-[#212121] rounded bg-black text-white px-4 py-2'>fragrances</li> </Link>
                        <Link to='/category/skincare'> <li className=' cursor-pointer hover:bg-[#212121] rounded bg-black text-white px-4 py-2'>skincare</li></Link>
                        <Link to='/category/furniture'>  <li className=' cursor-pointer hover:bg-[#212121] rounded bg-black text-white px-4 py-2'>furniture</li></Link>
                    </ul>
                </div>
            </div>
            {loading ? <div className='  bg-white w-full   flex justify-center items-center'><div className="dot-spinner">
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
            </div></div> : <div className='xl:w-[80rem]'>
                {phones.length !== 0 && <div style={{ scrollMarginTop: "4rem" }} id="smartphones" className=" smartphones px-3 my-4">
                    <h1 className=' text-2xl lg:text-4xl'>SmartPhones</h1>
                    <div className=" mt-5 smartphonesitems flex items-center   gap-3 lg:gap-7">
                        <Swiper
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            loop={true}
                            // modules={[Autoplay]}
                           
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}

                        >
                            {phones.map((i, index) =>
                                <SwiperSlide key={index}>
                                    <Product item={i} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>}
                {laptops.length !== 0 && <div style={{ scrollMarginTop: "4rem" }} id="laptops" className=" smartphones px-3 my-4">
                    <h1 className=' text-2xl lg:text-4xl'>Laptops</h1>
                    <div className=" mt-5 smartphonesitems flex items-center  gap-3 lg:gap-7 ">
                        <Swiper
                             breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            loop={true}
                            // modules={[Autoplay]}
                           
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            {laptops.map((i, index) =>
                                <SwiperSlide key={index}>
                                    <Product item={i} />
                                </SwiperSlide>
                            )}
                        </Swiper>


                    </div>
                </div>}
                {frag.length !== 0 && <div style={{ scrollMarginTop: "4rem" }} id="fragrances" className=" smartphones px-3 my-4">
                    <h1 className=' text-2xl lg:text-4xl'>Fragnances</h1>
                    <div className=" mt-5 smartphonesitems flex items-center  gap-3 lg:gap-7 ">
                        <Swiper
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            loop={true}
                            // modules={[Autoplay]}
                           
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            {frag.map((i, index) =>
                                <SwiperSlide key={index}>
                                    <Product item={i} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>}
                {skincare.length !== 0 && <div style={{ scrollMarginTop: "4rem" }} id="skincare" className=" smartphones px-3 my-4">
                    <h1 className=' text-2xl lg:text-4xl'>Skincare</h1>
                    <div className=" mt-5 smartphonesitems flex items-center  gap-3 lg:gap-7  ">
                        <Swiper
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            loop={true}
                            // modules={[Autoplay]}
                           
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            {skincare.map((i, index) =>
                                <SwiperSlide key={index}>
                                    <Product item={i} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>}
                {furniture.length !== 0 && <div style={{ scrollMarginTop: "4rem" }} id="furniture" className=" smartphones px-3 my-4">
                    <h1 className=' text-2xl lg:text-4xl'>Furniture</h1>
                    <div className=" mt-5 smartphonesitems flex items-center gap-3 lg:gap-7 ">
                        <Swiper
                           breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        loop={true}
                        // modules={[Autoplay]}
                       
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        >
                            {furniture.map((i, index) =>
                                <SwiperSlide key={index}>
                                    <Product item={i} />
                                </SwiperSlide>
                            )}
                        </Swiper>


                    </div>
                </div>}
            </div>}

        </div>

    )
}

export default Categorylist
