import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle, FaStore, FaSignOutAlt, FaPlus, FaBars } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { cartCount } = useCart();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
    window.location.reload();
  };

  return (
    // 1. ULTRA GLASS EFFECT (Blur + Transparency)
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200/50 bg-white/70 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* 2. GRADIENT LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg text-white group-hover:rotate-12 transition-transform duration-300">
            <FaStore className="text-xl" />
          </div>
          <span className="self-center text-2xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-transparent tracking-tight">
            ShopMall
          </span>
        </Link>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
          
          {/* CART ICON (With Pulse Animation) */}
          <Link to="/cart" className="relative group p-2 rounded-full hover:bg-gray-100 transition-colors">
            <FaShoppingCart className="text-2xl text-gray-700 group-hover:text-blue-600 transition-colors" />
            
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg animate-pulse border-2 border-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* USER SECTION (Conditional) */}
          {user ? (
            <div className="flex items-center gap-3">
              
              {/* Admin Button */}
              {user.role === 'ADMIN' && (
                <Link 
                  to="/admin" 
                  className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-md active:scale-95"
                >
                  <FaPlus className="text-xs" /> Add Item
                </Link>
              )}

              {/* 3. USER PILL (Capsule Design) */}
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-1 py-1 pr-4 rounded-full border border-blue-100">
                <div className="bg-white p-1.5 rounded-full shadow-sm text-blue-600">
                   <FaUserCircle className="text-xl" />
                </div>
                <div className="hidden sm:flex flex-col items-start leading-none">
                  <span className="text-xs text-gray-400 font-semibold">Hello,</span>
                  <span className="text-sm font-bold text-gray-800">{user.username.split(" ")[0]}</span>
                </div>
                
                {/* Logout Mini Button */}
                <button 
                  onClick={handleLogout}
                  title="Logout"
                  className="ml-2 text-gray-400 hover:text-red-500 transition-colors p-1"
                >
                  <FaSignOutAlt />
                </button>
              </div>

            </div>
          ) : (
            // GUEST STATE
            <Link to="/login">
              <button type="button" className="text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2.5 text-center transition-all shadow-lg hover:shadow-blue-500/30 active:scale-95">
                Login
              </button>
            </Link>
          )}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;