const mongoose=require('mongoose');

const itemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
        min:1,
    }
});


/// For authorization/ authentication


const cartSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true,
    },
    items:[itemSchema],
},{timestamps:true});


const cartModel=mongoose.model("Cart",cartSchema);
module.exports=cartModel;
