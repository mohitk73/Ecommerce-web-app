import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About';
import Banner from './components/Bannergrid';
import Footer from './components/Footer';
import Navigation from './components/Navbar';
import Newsletter from './components/Newsletter';
import Product from './components/Product';
import Slider from './components/Slidersection';
import Notificationbar from './components/notificationbar';
import Support from './components/support';
import { CartProvider } from './contexts/CartContext';
import Cart from './pages/Cart';
import Productdetails from './pages/Productdetails';
import Shop from './pages/Shop';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
  function App() {
    const location = useLocation();
    const hideNav = location.pathname === '/signup' || location.pathname === '/signin';
  return (
    <>
    <Notificationbar/>
       {!hideNav && <Navigation />}
      <CartProvider>
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <Banner />
            <Product />
            <Support />
            <About />
            <Newsletter />
            <Footer />
          </>
        } />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Productdetails />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        
      </Routes>
      </CartProvider>
    </>
  );
}

export default App;

