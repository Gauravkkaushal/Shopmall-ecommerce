🛍️ ShopMall - Modern MERN E-Commerce Platform

A fully functional, full-stack E-commerce application built with the MERN Stack (MongoDB, Express, React, Node.js). Featuring a modern glassmorphism UI, secure authentication, admin dashboard, and a seamless shopping cart experience.

🌟 Live Demo

🔗 Live Site: Link Coming Soon

🎥 Video Demo: Link Coming Soon

🚀 Key Features

👤 User Experience (Frontend)

Modern UI/UX: Built with React + Tailwind CSS featuring Glassmorphism, Gradients, and Animations.

Product Gallery: Grid layout with hover effects and responsive design.

Smart Navbar: Live cart count badge, user profile pill, and conditional rendering (Login/Logout).

Authentication: Secure Login & Registration pages with split-screen design.

Shopping Cart: Add items, live price calculation, and remove items functionality.

Toast Notifications: Beautiful popups using react-hot-toast instead of boring alerts.

🛡️ Backend & Security

Secure API: Built with Node.js & Express.

Database: MongoDB (Mongoose) for storing Users, Products, and Carts.

Authentication: JWT (JSON Web Token) based stateless authentication.

Password Security: BCrypt hashing to protect user passwords.

Role-Based Access Control (RBAC): Special Admin Routes protected by middleware.

⚡ Admin Powers

Admin Dashboard: Exclusive page for Admins to launch new products.

Product Management: Add product details (Name, Price, Image, Stock, Category).

Security Guard: Non-admin users cannot access dashboard URLs.

🛠️ Tech Stack

Area

Technology

Frontend

React (Vite), Tailwind CSS, React Router DOM, Axios, React Icons, React Hot Toast

Backend

Node.js, Express.js

Database

MongoDB, Mongoose

Auth

JSON Web Token (JWT), BCryptJS

State Management

React Context API

📸 Screenshots

Home Page

Login Page





(Note: Replace these links with your actual project screenshots)

⚙️ Installation & Run Locally

Follow these steps to setup the project on your machine.

Prerequisites

Node.js installed

MongoDB installed (or MongoDB Atlas URI)

1. Clone the Repository

git clone [https://github.com/Gauravkkaushal/Shopmall-ecommerce.git](https://github.com/Gauravkkaushal/Shopmall-ecommerce.git)
cd Shopmall-ecommerce



2. Setup Backend

Navigate to the backend folder and install dependencies:

cd ecommerce-backend
npm install



Create a .env file in the root of ecommerce-backend folder and add your secrets:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key



Start the server:

npm run dev
# Server runs on http://localhost:5000



3. Setup Frontend

Open a new terminal and navigate to the client folder:

cd client
npm install



Start the client application:

npm run dev
# Client runs on http://localhost:5173



🛣️ API Endpoints

Method

Endpoint

Description

Access

POST

/api/auth/register

Register a new user

Public

POST

/api/auth/login

Login user & get Token

Public

GET

/api/products

Get all products

Public

POST

/api/products/add

Add a new product

Admin Only 🔒

POST

/api/cart/add

Add item to cart

User 🔒

GET

/api/cart

Get user cart

User 🔒

DELETE

/api/cart/remove/:id

Remove item

User 🔒

🤝 Contributing

Contributions are welcome!

Fork the project

Create your Feature Branch:

git checkout -b feature/AmazingFeature



Commit your changes:

git commit -m 'Add some AmazingFeature'



Push to the Branch:

git push origin feature/AmazingFeature



Open a Pull Request

👨‍💻 Author

Gaurav Kaushal

GitHub: @Gauravkkaushal

LinkedIn: 

$$Add Your Profile Link Here$$

Made with ❤️ and JavaScript