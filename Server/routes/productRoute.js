// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts } = require('../controllers/productController');

const { protect, adminOnly } = require('../middlewares/authmiddleware');

// --- ROUTES ---

// 1. Create Product (PROTECTED: Login hona chahiye + Admin hona chahiye)
// Order dekho: Pehle protect (Login check), fir adminOnly (Role check), fir Controller
router.post('/add', protect, adminOnly, createProduct);

// 2. Get All Products (PUBLIC: Koi bhi dekh sakta hai)
// Yahan koi guard nahi chahiye
router.get('/', getAllProducts);

module.exports = router;