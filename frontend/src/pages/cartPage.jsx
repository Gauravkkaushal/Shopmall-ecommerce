import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash, FaArrowRight, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  // 1. Cart ka data maango
  useEffect(() => {
    fetchCart();
  }, []);

  // 2. Bill Calculate karo (Jab bhi cartItems badle)
  useEffect(() => {
    // reduce: Ye array ghumakar ek single number (Total) banata hai
    const total = cartItems.reduce((acc, item) => {
      return acc + (item.productId.price * item.quantity);
    }, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const fetchCart = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/api/cart', {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Backend se items array nikalo (Agar cart nahi hai toh empty array)
      setCartItems(response.data.items || []); 
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // 3. Item Delete karne ka logic
  const handleRemove = async (productId) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:5000/api/cart/remove/${productId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Page refresh kiye bina list se item hata do (Optimistic Update)
      // Filter: "Wo item rakho jiski ID delete wali ID se match NAHI karti"
      setCartItems(cartItems.filter(item => item.productId._id !== productId));
      
      alert("Item removed!");
    } catch (error) {
      console.error(error);
      alert("Error removing item");
    }
  };

  if (loading) return <div className="text-center mt-20 text-xl font-bold">Loading Cart... ⏳</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-6">
        
        <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
          <FaShoppingBag /> My Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          // --- EMPTY CART STATE ---
          <div className="text-center py-20 bg-white rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-400 mb-4">Your cart is empty 😢</h3>
            <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
              Start Shopping
            </Link>
          </div>
        ) : (
          // --- FILLED CART (Split Screen) ---
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* LEFT: CART ITEMS LIST */}
            <div className="lg:w-2/3 space-y-6">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  
                  {/* Product Image */}
                  <img 
                    src={item.productId.imageUrl} 
                    alt={item.productId.name} 
                    className="w-24 h-24 object-cover rounded-md"
                  />

                  {/* Product Details */}
                  <div className="ml-6 flex-1">
                    <h3 className="text-lg font-bold text-gray-800">{item.productId.name}</h3>
                    <p className="text-gray-500 text-sm">{item.productId.category}</p>
                    <p className="text-blue-600 font-bold mt-1">₹ {item.productId.price}</p>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex flex-col items-end gap-3">
                    <span className="text-gray-600 font-medium">Qty: {item.quantity}</span>
                    
                    <button 
                      onClick={() => handleRemove(item.productId._id)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm font-bold bg-red-50 px-3 py-1 rounded-full transition-colors"
                    >
                      <FaTrash /> Remove
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* RIGHT: BILL SUMMARY (Fixed Box) */}
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold mb-6 border-b pb-4">Order Summary</h3>
                
                <div className="flex justify-between mb-4 text-gray-600">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>₹ {totalPrice}</span>
                </div>
                <div className="flex justify-between mb-4 text-gray-600">
                  <span>Tax (GST 18%)</span>
                  <span>₹ {Math.round(totalPrice * 0.18)}</span>
                </div>
                <div className="flex justify-between mb-6 text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold">Free</span>
                </div>

                <div className="border-t pt-4 flex justify-between items-center mb-6">
                  <span className="text-xl font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ₹ {totalPrice + Math.round(totalPrice * 0.18)}
                  </span>
                </div>

                <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-transform active:scale-95 flex items-center justify-center gap-2">
                  Proceed to Checkout <FaArrowRight />
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;