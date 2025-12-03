import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaStore } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold flex items-center gap-2 text-blue-500">
            <FaStore /> ShopMall
          </h2>
          <p className="text-gray-400 text-sm">
            Premium products, unbeatable prices. Your one-stop destination for all things amazing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Shop</li>
            <li className="hover:text-blue-400 cursor-pointer transition">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition">FAQ</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Shipping Info</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Returns</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Order Status</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Connect With Us</h3>
          <div className="flex gap-4">
            <SocialIcon icon={<FaFacebook />} />
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaLinkedin />} />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} ShopMall Inc. All rights reserved. Made with ❤️ by You.
      </div>
    </footer>
  );
};

// Helper Component for Icons
const SocialIcon = ({ icon }) => (
  <div className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all cursor-pointer hover:-translate-y-1">
    {icon}
  </div>
);

export default Footer;