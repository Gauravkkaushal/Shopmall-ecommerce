// src/context/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// 1. Context Create karo
const CartContext = createContext();

// 2. Provider Banao (Dukaan jo data baategi)
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  // Ginti update karne ka function
  const fetchCartCount = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setCartCount(0);
      return;
    }

    try {
      // Backend se poocho: "Kitne items hain?"
      const response = await axios.get('http://localhost:5000/api/cart', {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Items ki total quantity jodo
      const items = response.data.items || [];
      const totalQty = items.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(totalQty);
    } catch (error) {
      console.error("Cart Count Error:", error);
      setCartCount(0);
    }
  };

  // Jab app load ho, tab ginti check karo
  useEffect(() => {
    fetchCartCount();
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, fetchCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Hook banao taaki aasaani se use kar sakein
export const useCart = () => useContext(CartContext);