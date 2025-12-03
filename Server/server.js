require('dotenv').config();
const express=require("express")
const mongoose=require('mongoose');
const cors=require('cors');
const productRoutes = require('./routes/productRoute');
const cartRoutes=require("./routes/cartRoute");
const authRoutes=require('./routes/authRoutes');
const app=express();

app.use(express.json())
app.use(cors())


app.use('/api/auth',authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart',cartRoutes);
const MONGO_URL='mongodb://localhost:27017/ecommerce_db';

mongoose.connect(MONGO_URL).
then(()=>{
    console.log("connected to database");
    app.listen(5000,()=>{
        console.log("Server Started")
    })
}).catch((err)=>{
    console.log("Error",err);
})