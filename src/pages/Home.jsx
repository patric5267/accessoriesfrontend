import React, { useEffect } from 'react'
import Herosection from '../components/Herosection'
import Categorylist from '../components/Categorylist'
const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className=''>
      <Herosection/>
      <Categorylist/>
    </div>
  )
}

export default Home
