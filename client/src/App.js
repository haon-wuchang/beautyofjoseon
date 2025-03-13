import logo from './logo.svg';
import './style/haon.css';
import './style/yuna.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './page/Layout.jsx';
import Home from './page/Home.jsx';
import Login from './page/Login.jsx';
import Signup from './page/Signup.jsx';
import Mypage from './page/Mypage.jsx';
import Products from './page/Products.jsx';
import ProductDetail from './page/ProductDetail.jsx';
import Cart from './page/Cart.jsx';
import Payment from './page/Payment.jsx';
import { AuthProvider } from './auth/AuthContext.js';
import { MypageProvider } from './context/MypageContext.js';

export default function App() {
  return (
    <AuthProvider>
      <MypageProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/mypage' element={<Mypage />} />
              <Route path='/product' element={<Products />} />
              <Route path='/product/detail/:pid' element={<ProductDetail />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/payment' element={<Payment />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MypageProvider>
    </AuthProvider>
  );
}

