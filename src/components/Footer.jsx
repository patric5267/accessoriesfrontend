import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full footer xl:flex xl:justify-center mt-5  bg-[#212121]">
        <div className=' text-white  xl:w-[80rem] px-3 overflow-hidden py-5 lg:py-6 lg:h-[20rem] md:flex md:justify-between  '>
          
        <div className=' firstitem'>
          <h2 className=' font-medium text-lg  lg:text-2xl md:mt-0 mb-4'>Learn More</h2>
          <ul className=' text-gray-500'>
            <li className=' mb-2 md:text-sm lg:text-lg'>About Hilink</li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Press Releses</li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Environment</li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Jobs</li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Privacy Policy</li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Contact Us</li>
          </ul>
        </div>
        <div className=' firstitem'>
          <h2 className=' font-medium text-lg lg:text-2xl mt-7 md:mt-0 mb-4'>Our Community</h2>
          <ul className=' text-gray-500'>
            <li className=' mb-2 md:text-sm lg:text-lg'>Climbing xixixi</li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Hiking hilink</li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Hilink kinthili</li>
          </ul>
        </div>
        <div className="contactus">
          <h2 className=' font-medium text-lg mt-7 md:mt-0 mb-4'>Contact Us</h2>
          <ul className=' text-gray-500'>
            <li className=' mb-2 md:text-sm lg:text-lg'>Admin Officer: <b className='ml-2'>123-456-7890</b></li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Email Officer:  <b className='ml-2'>hilink@akinthil.com</b></li>
          </ul>
        </div>
        <div className="social">
          <h2 className=' font-medium text-lg lg:text-2xl mt-7 md:mt-0 mb-4'>Social</h2>
          <ul className=' flex '>
            <li className='mr-4'><FaFacebook className=' text-2xl'/></li>
            <li className='mr-4'><FaSquareInstagram className=' text-2xl' /></li>
            <li className='mr-4'><FaTwitter className=' text-2xl'/></li>
            <li className='mr-4'><FaYoutube className=' text-2xl'/></li>
          </ul>
        </div>
        </div>
      </div>
  )
}

export default Footer
