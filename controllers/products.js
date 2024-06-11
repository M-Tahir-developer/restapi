const products = require("../models/products")

const getAllProduct = async(req,res)=>{
    console.log(req.query);
    const {company,name,sort,select} = req.query;
    const queryObject = {};

    if(name){
        queryObject.name = name;
    }
    if(company){
        queryObject.company = {$regex:company,$options:"i"};
    }
    let apidata = await products.find(queryObject);

    if(sort){
        let sortfix = sort.split(',').join(' ');
        sortfix = apidata.sort(sortfix);
    }
    if(select){
        let selectfix = select.split(',').join(' ');
        selectfix = apidata.select(selectfix);
    }
    apidata;
    res.status(200).json({apidata});
}
const getAllProductTesting = async(req,res)=>{
    res.status(200).json({msg:"I am getting all productsTesting"})
}

module.exports = {getAllProduct,getAllProductTesting};