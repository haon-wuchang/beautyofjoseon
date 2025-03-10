import logo from './logo.svg';
import './style/haon.css';
import './style/yuna.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './page/Layout.jsx';
import Home from './page/Home.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Layout />} >          
          <Route index element={<Home />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

