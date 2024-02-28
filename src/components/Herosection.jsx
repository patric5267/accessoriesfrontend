import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from '../Extras/Brand';
import { Autoplay ,EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
const Herosection = () => {
    return (
        <div className='xl:flex xl:justify-center' id="home">
            <div className=' xl:w-[80rem] px-3 flex flex-col sm:flex-row sm:items-center lg:justify-between gap-4  lg:gap-10 sm:h-[100vh]'>
                <div className="heroimg sm:order-2 sm:w-[50%]    ">
                    <Swiper 
                    modules={[Autoplay,EffectFade]}
                    loop={true}
                    centeredSlides={true}
                    effect={'fade'}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1} >
                       {images.map((image,index)=> <SwiperSlide key={index}>  <img src={image} alt="" className='rounded w-full ' /></SwiperSlide> )}
                    </Swiper>
                </div>
                <div className="herodescription flex flex-col items-start gap-3 sm:order-1 sm:w-[50%]">
                    <h1 className=' text-4xl lg:text-6xl'>All you need is here</h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At eaque nobis laudantium, cupiditate sit aut alias eos? At, excepturi delectus.</p>
                    <Link to='/allproducts' className='active:bg-blue-400  bg-blue-600  text-white rounded px-3 py-2 lg:text-xl'>Show Products</Link>
                </div>
            </div>
        </div>

    )
}

export default Herosection
