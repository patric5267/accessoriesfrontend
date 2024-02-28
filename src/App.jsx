import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Productpage from './pages/Productpage'
import Allproducts from './pages/Allproducts'
import Cart from './pages/Cart'
import Categoryproduct from './pages/Categoryproduct'
import Checkout from './pages/Checkout'
function App() {
 
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Productpage />} />
        <Route path='/allproducts' element={<Allproducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category/:categoryitem' element={<Categoryproduct />} />
        <Route path='/checkout/:title/:id/:quantity' element={<Checkout />} />
      </Routes>
     <Footer/>
    </Router>
  )
}

export default App
