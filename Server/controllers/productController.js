const Product=require('../model/productModel');

const createProduct=async(req,res)=>{
    try{
        const {name,description,price,imageUrl}=req.body;
        if(!name||!description||!price||!imageUrl){
            return res.status(400).json({message:"Fill all the required details"});
        }
        const newProduct= new Product({
            name,
            description,
            price,
            imageUrl,
            addedBy: req.user.id
        });
        await newProduct.save();
        res.status(200).json({
            message:"Product added successfully",
            product:newProduct
        })
    }catch(err){
        res.status(500).json({message:"Server error",error:err.message});
    }

};


const getAllProducts=async(req,res)=>{
    try{
        const products=await Product.find();
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({message:"Server error",error:err.message});
    }
}


module.exports={createProduct,getAllProducts};