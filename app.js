require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;


const product_routes = require('./routes/products');
const connectDB = require("./db/connect")


// app.get('/',(req,res)=>{
//     res.send("hi")
// });


app.use("/api/products",product_routes)

const start = async ()=>{
    try{
        await connectDB(process.env.uri);
        app.listen(port,()=>{
            console.log(`${port} yes i iam connected`)
        })
    }
    catch(error){
        console.log(error);
    }
}

start();