import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Layout from './Layout';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { CartProvider } from './Context/Bookcontext';
// import Booklist from './components/Booklist';


function App() {

  return (
    <>
    
    <CartProvider>
       <BrowserRouter>
    
          <Routes>
            <Route path='/' element = {<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='book/:id' element ={<Product/>}/>
            </Route>
          </Routes>
       </BrowserRouter>
    </CartProvider>
  
    
    </>
  )
}

export default App
