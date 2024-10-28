import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Login from './Components/Login';
import Register from './Components/Register';
import ProductView from './Components/ProductView';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Router>
      <div className='main-class'>
        <Routes>
          <Route path="/" element={isLogin ? <MainLayout/> : <Navigate to="/login" replace />} />
          <Route path="/login" element={<Login onLoginSuccess={() => setIsLogin(true)} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productview" element={<ProductView />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
