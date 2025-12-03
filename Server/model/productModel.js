const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },
    description:{
        type:String,
        trim:true,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    imageUrl:{
        type:String,
        required:true,
    },
    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true});


const Product=mongoose.model("Product",productSchema);
module.exports=Product;