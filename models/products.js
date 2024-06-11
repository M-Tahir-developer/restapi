const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name :{
        type: String,
        required:true,
    },
    price :{
        type: Number,
        required:[true,"must be provided"],
    },
    featured :{
        type: Boolean,
        default:false,
    },
    rating :{
        type: Number,
        default:4.9,
    },
    createdAT :{
        type: Date,
        default: Date.now(),
    },
    company :{
        type: String,
        enum:{
            values:["apple","sumsung","sumsung1","sumsung88","oppo"],
            message: "{VALUE}is not supported"
        }
    }
})

module.exports = mongoose.model("Product",productSchema)