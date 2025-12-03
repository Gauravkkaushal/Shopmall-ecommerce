import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaShoppingCart, FaStar, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast'; // Import Toast

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { fetchCartCount } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to load products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error("Please login to add items");
      navigate('/login');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/cart/add', { productId, quantity: 1 }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success("Added to Cart!"); // Sundar Popup
      fetchCartCount();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center text-3xl font-bold text-gray-300">Loading...</div>;

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. ULTRA MODERN HERO SECTION */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover opacity-40" />
        </div>
        
        <div className="relative container mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
          <span className="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">New Collection</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Discover the <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Future of Style</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
            Explore our curated collection of premium electronics and fashion. Quality you can trust, prices you'll love.
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105">
            Start Shopping <FaArrowRight />
          </button>
        </div>
      </div>

      {/* 2. PRODUCT GRID */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Trending Now</h2>
          <button className="text-blue-600 font-bold hover:underline">View All</button>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-lg">No products found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product._id} className="group bg-white rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                
                {/* Image */}
                <div className="h-64 bg-gray-50 p-6 flex items-center justify-center relative">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" />
                  
                  {/* Floating Add Button (Only visible on hover) */}
                  <button 
                    onClick={() => handleAddToCart(product._id)}
                    className="absolute bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-700"
                  >
                    <FaShoppingCart />
                  </button>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-2">{product.category}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                    <div className="flex text-yellow-400 text-sm"><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;