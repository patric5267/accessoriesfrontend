import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Suspense, lazy } from 'react'
// import Home from './pages/Home'
// import Productpage from './pages/Productpage'
// import Allproducts from './pages/Allproducts'
// import Cart from './pages/Cart'
// import Checkout from './pages/Checkout'
const Home = lazy(()=>import('./pages/Home'))
const Productpage =lazy(()=>import('./pages/Productpage'))
const Allproducts = lazy(()=>import('./pages/Allproducts'))
const Cart = lazy(()=>import('./pages/Cart'))
const Categoryproduct=lazy(()=>import('./pages/Categoryproduct'))
const Checkout=lazy(()=>import('./pages/Checkout'))
function App() {
 
  return (
    <Router >
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Productpage />}/>
        <Route path='/allproducts' element={<Allproducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category/:categoryitem' element={<Categoryproduct/>} />
        <Route path='/checkout/:title/:id/:quantity' element={<Checkout/>} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Productpage />} />
        <Route path='/allproducts' element={<Allproducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category/:categoryitem' element={<Categoryproduct/>} />
        <Route path='/checkout/:title/:id/:quantity' element={<Checkout />} />
      </Routes>
     <Footer/>
    </Router>
  )
}

export default App
