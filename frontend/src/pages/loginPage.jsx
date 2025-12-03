import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast'; // New Notification System

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false); // Loading state for button

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Spinner chalu
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      toast.success(`Welcome back, ${user.username}!`); // Beautiful Toast
      navigate('/');
      window.location.reload();
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
      setLoading(false); // Spinner band
    }
  };

  return (
    <div className="min-h-screen flex">
      
      {/* LEFT SIDE: IMAGE (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-cover bg-center relative" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-white text-center p-10">
            <h1 className="text-5xl font-bold mb-4">Shop With Style</h1>
            <p className="text-xl">Premium Fashion & Electronics at your fingertips.</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md space-y-8">
          
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-gray-500">Sign in to manage your account</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <input 
                type="email" name="email" placeholder="Email Address" onChange={handleChange} required 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors"
              />
              <input 
                type="password" name="password" placeholder="Password" onChange={handleChange} required 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Don't have an account? <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">Sign up for free</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;