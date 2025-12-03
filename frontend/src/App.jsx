import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // 1. Import Toaster

import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import CartPage from './pages/cartPage';
import AdminPage from './pages/adminPage';
import Navbar from './components/NavBar';
import Footer from './components/Footer'; // 2. Import Footer

import { CartProvider } from './context/CartContext';

const AdminRoute = ({ children }) => {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  if (!user || user.role !== 'ADMIN') return <Navigate to="/" replace />;
  return children;
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* 3. Toaster yahan lagaya (Notifications ke liye) */}
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
        
        <Navbar />
        
        {/* Main Content ke liye min-height di taaki footer niche rahe */}
        <div className="min-h-screen">
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/admin" element={<AdminRoute><AdminPage /></AdminRoute>} />
            </Routes>
        </div>

        {/* 4. Footer Jod Diya */}
        <Footer />
        
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;