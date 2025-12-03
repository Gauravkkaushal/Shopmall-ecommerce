const Cart=require('../model/cartModel');

const addCart=async(req,res)=>{
    try{
        const {productId, quantity}=req.body;
        const userId=req.user.id;

        let cart=await Cart.findOne({user:userId});

        if(cart){
            const itemIndex=cart.items.findIndex(p=>p.productId==productId);
            if(itemIndex>-1){
                cart.items[itemIndex].quantity+=quantity;

            }
            else{
                cart.items.push({productId,quantity});
            }
            await cart.save();
        }
        else {
            cart=new Cart({
                user:userId,
                items:[{productId,quantity}]
            });
            await cart.save();
        }
        res.status(200).json({message:"Cart updated"});
    }catch(err){
        res.status(500).json({message:"Server error",error:err.message});
    }
};

const getCart=async(req,res)=>{
    try{
        const userId=req.user.id;

        const cart=await Cart.findOne({user:userId}).populate('items.productId');
        if (!cart) {
            return res.status(200).json({ items: [] }); // Agar cart nahi hai, khali list bhejo
        }
        res.status(200).json(cart);
    }
    catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}


const removeFromCart=async(req,res)=>{
    try{
        const userId=req.user.id;
        const {productId}=req.params;
        let cart=await Cart.findOne({user:userId});
        if(!cart) return res.status(400).json({message:"Cart not found"});

        cart.items=cart.items.filter(item=>item.productId!=productId);
        await cart.save();
        res.status(200).json({message:"item removed",cart});
    }
    catch(err){
        res.status(500).json({message:"Server error",error:err});
    }
};


module.exports={addCart,getCart,removeFromCart};
