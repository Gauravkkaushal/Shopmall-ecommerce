import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();
  
  // Form ka data
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    category: '',
    stock: 10
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      // Backend request (Headers mein token zaroori hai)
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      await axios.post('http://localhost:5000/api/products/add', product, config);
      
      alert("Product Launched Successfully! 🚀");
      navigate('/'); // Kaam khatam, Home par bhejo

    } catch (error) {
      console.error(error);
      alert("Error: " + (error.response?.data?.message || "Sirf Admin allow hai!"));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">
          Admin Dashboard: Add Product
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          
          {/* Product Name */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">Product Name</label>
            <input type="text" name="name" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. iPhone 15" required />
          </div>

          {/* Price & Stock (Side by Side) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Price (₹)</label>
              <input type="number" name="price" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg outline-none" placeholder="50000" required />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Stock</label>
              <input type="number" name="stock" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg outline-none" placeholder="10" />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea name="description" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg outline-none" rows="3" placeholder="Product details..." required></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">Image URL</label>
            <input type="text" name="imageUrl" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg outline-none" placeholder="https://example.com/image.jpg" required />
            <p className="text-xs text-gray-500 mt-1">Tip: Google se image ka link copy karke yahan paste karein.</p>
          </div>

           {/* Category */}
           <div>
            <label className="block text-gray-700 font-bold mb-2">Category</label>
            <input type="text" name="category" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg outline-none" placeholder="Electronics, Fashion, etc." required />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors">
            🚀 Launch Product
          </button>

        </form>
      </div>
    </div>
  );
};

export default AdminPage;