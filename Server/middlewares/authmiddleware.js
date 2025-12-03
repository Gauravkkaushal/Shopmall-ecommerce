const jwt=require('jsonwebtoken');

const protect=async(req,res,next)=>{
    
    const tokenHeader=req.headers['authorization'];
    if(!tokenHeader){
        return res.status(400).json({message:"NO token! Access Denied"});
    }
    try{
        const token=tokenHeader.split(" ")[1];

        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        req.user=decoded;
        next();
    }
    catch(err){
        res.status(401).json({ message: "Invalid Token" });
    }
}

const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === 'ADMIN') {
        next();
    } else {
        res.status(403).json({ message: "You are not and ADMIN"});
    }
};

module.exports = { protect, adminOnly };