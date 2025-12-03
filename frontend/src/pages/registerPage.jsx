import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate(); // Page badalne ke liye (Register -> Login)
  
  // State: Form ka data yahan store hoga
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Jab user type karega, state update hogi
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Jab Form submit hoga
  const handleSubmit = async (e) => {
    e.preventDefault(); // Page refresh hone se roko
    try {
      // Backend ko data bhejo
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      
      alert("Registration Successful! 🎉 Ab Login karein.");
      navigate('/login'); // User ko Login page par bhej do

    } catch (error) {
      console.error(error);
      alert("Error: " + (error.response?.data?.message || "Kuch gadbad hai"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      {/* CARD Container */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Username Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input 
              type="text" 
              name="username"
              placeholder="Apna naam likhein"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              placeholder="example@gmail.com"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input 
              type="password" 
              name="password"
              placeholder="********"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
            Register Now
          </button>

        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline">Login</Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;