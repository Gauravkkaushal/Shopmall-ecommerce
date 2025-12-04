# 🛍️ **ShopMall – Modern MERN E-Commerce Platform**

A fully functional, full-stack **E-Commerce Web Application** built using the **MERN Stack** (MongoDB, Express, React, Node.js).
ShopMall features a **modern glassmorphism UI**, secure authentication, admin dashboard, product management, and a seamless shopping experience.

---

## 🌟 **Live Demo**

🔗 **Live Site:** *Coming Soon*
🎥 **Video Demo:** *Coming Soon*

---

## 🚀 **Key Features**

### 👤 **Frontend – User Experience**

* ✨ **Modern UI/UX** with Glassmorphism, gradients & smooth animations
* 🛒 **Product Gallery** with hover effects & responsive grid
* 📌 **Smart Navbar** (live cart count, user pill, logout/login rendering)
* 🔐 **Auth Pages** – Login & Register with split-screen modern UI
* 🛍️ **Shopping Cart** – Add items, auto price calculation, remove items
* 🔔 **Toast Notifications** using *react-hot-toast* (no boring alerts!)

---

### 🛡️ **Backend & Security**

* ⚙️ RESTful API built with **Node.js + Express**
* 🗄️ **MongoDB + Mongoose** for storing Users, Products, Carts
* 🔑 **JWT Authentication** (stateless & secure)
* 🔒 **Password Hashing** using BCrypt
* 🛂 **Role-Based Access Control (RBAC)** – Admin-only routes protected by middleware

---

### ⚡ **Admin Features**

* 🖥️ **Admin Dashboard** for launching new products
* ➕ Add product details (name, price, image, stock, category)
* 🚫 Non-admin users cannot access admin routes

---

## 🛠️ **Tech Stack**

| Area                 | Technology                                                                        |
| -------------------- | --------------------------------------------------------------------------------- |
| **Frontend**         | React (Vite), Tailwind CSS, React Router DOM, Axios, React Icons, React Hot Toast |
| **Backend**          | Node.js, Express.js                                                               |
| **Database**         | MongoDB, Mongoose                                                                 |
| **Auth**             | JWT (JSON Web Token), BCryptJS                                                    |
| **State Management** | React Context API                                                                 |

---

## 📸 **Screenshots**



🖼️ **Home Page**
<img width="1900" height="962" alt="image" src="https://github.com/user-attachments/assets/8894c707-1420-40ec-b56e-f92c8bd52436" />

🖼️ **Login Page**
<img width="1899" height="946" alt="image" src="https://github.com/user-attachments/assets/01a7ba45-e802-4f17-bc30-76748b158174" />

---

## ⚙️ **Installation & Run Locally**

Follow the steps below to run ShopMall on your machine.

---

### ✅ **Prerequisites**

* Node.js installed
* MongoDB installed locally **or** MongoDB Atlas URI

---

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/Gauravkkaushal/Shopmall-ecommerce.git
cd Shopmall-ecommerce
```

---

### 2️⃣ **Setup Backend**

```bash
cd ecommerce-backend
npm install
```

Create a **.env** file inside `ecommerce-backend`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

Start backend server:

```bash
npm run dev
```

Backend runs on: **[http://localhost:5000](http://localhost:5000)**

---

### 3️⃣ **Setup Frontend**

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs on: **[http://localhost:5173](http://localhost:5173)**

---

## 🛣️ **API Endpoints**

| Method | Endpoint               | Description            | Access   |
| ------ | ---------------------- | ---------------------- | -------- |
| POST   | `/api/auth/register`   | Register a new user    | Public   |
| POST   | `/api/auth/login`      | Login user & get token | Public   |
| GET    | `/api/products`        | Fetch all products     | Public   |
| POST   | `/api/products/add`    | Add new product        | Admin 🔒 |
| POST   | `/api/cart/add`        | Add item to cart       | User 🔒  |
| GET    | `/api/cart`            | Get user cart          | User 🔒  |
| DELETE | `/api/cart/remove/:id` | Remove cart item       | User 🔒  |

---

## 🤝 **Contributing**

Contributions are welcome!

```bash
# Create a new feature branch
git checkout -b feature/AmazingFeature

# Commit your changes
git commit -m "Add AmazingFeature"

# Push to your branch
git push origin feature/AmazingFeature
```

Open a Pull Request 🚀

---

## 👨‍💻 **Author**

**Gaurav Kaushal**
GitHub: [@Gauravkkaushal](https://github.com/Gauravkkaushal)
LinkedIn: https://www.linkedin.com/in/gauravkkaushal

---

## ❤️ **Made with passion, JavaScript, and lots of Chai.**

---
