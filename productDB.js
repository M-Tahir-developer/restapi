const connectDB = require("./db/connect");


require("dotenv").config();
const products = require("./models/products");
const productJson = require("./products.json");


const start = async ()=>{
    try{
        await connectDB(process.env.uri);
        await products.deleteMany();
        await products.create(productJson);
        console.log("success")
    }
    catch(error){
        console.log(error)
    }
}
start();