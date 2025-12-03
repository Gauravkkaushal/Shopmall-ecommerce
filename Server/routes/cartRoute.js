const express=require('express');
const router=express.Router();

const {addCart,getCart,removeFromCart}=require('../controllers/cartController');

const {protect}=require("../middlewares/authmiddleware");

router.post("/add",protect,addCart);
router.get('/',protect,getCart);
router.delete('/remove/:productId',protect,removeFromCart);

module.exports=router;