const mongoose = require("mongoose");

// const uri = "mongodb://localhost:27017/restapi";

const connectDB = (uri) =>{
    return mongoose.connect(uri ,{
        // useNewUrlParser: true,
        // useUnifiedTopology:true,
    })
}

module.exports = connectDB;