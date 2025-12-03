const bcrypt=require('bcrypt');
const User=require("../model/userModel");
const jwt=require('jsonwebtoken');
const registerUser=async(req,res)=>{
    console.log("User Model Check:", User);
    try{
    const {username,email,password}=req.body;
    if(!username||!email||!password){
        return res.status(400).json({message:"Fill all the data"});
    }
    // const existingUser=await User.findOne({email});
    const existingUser = await User.findOne({ email });
    if(existingUser){
        return res.status(400).json({message:"User already existed"});
    }

    ///Encryption start
    const salt=await bcrypt.genSalt(10);
    const hashedPass=await bcrypt.hash(password,salt);
    const newUser=new User({
        username,
        email,
        password:hashedPass,
    })
    await newUser.save();
    res.status(200).json({message:"User registered"});
}
catch(e){
    res.status(500).json({message:"Server Error",error:e.message})
}
};
console.log("Secret Key Check:", process.env.JWT_SECRET);
const loginUser=async(req,res)=>{
    try{
    const {email,password}=req.body;
    if(!email||!password){
        return res.status(400).json({message:"Both email and password required"});

    }
    const userExisted=await User.findOne({email});
    if(!userExisted){
        return res.status(400).json({message:"User doesn't exists. Please Register"});
    }
    const isMatch=await bcrypt.compare(password,userExisted.password);
    if(!isMatch){
        return res.status(400).json({message:"Incorrect Password"});
    }
    const token=jwt.sign(
        {id:userExisted._id,role:userExisted.role},
        process.env.JWT_SECRET,
        {expiresIn:'1h'}
    );
    res.status(200).json({
        message:"Login Successful!",
        token:token,
        user:{
            id:userExisted._id,
            username:userExisted.username,
            role:userExisted.role,
        }
    })
}catch(err){
    res.status(500).json({message:"Server error",error:err.message})
}
}

module.exports={registerUser,loginUser};