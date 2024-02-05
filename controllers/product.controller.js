const services = require("../services")
const status = require("http-status")


module.exports.create=async (req,res)=>
{     
    services.productService.create(req.body)
    .then((result)=>res.status(status.CREATED).json({
        statusCode:status.CREATED,
        message:"product created"
    }))
    .catch((error)=> res.status(status.INTERNAL_SERVER_ERROR).json({
        statusCode:status.INTERNAL_SERVER_ERROR,
        message:error.message
    }))   
}

module.exports.findAll = async (req,res)=>{
    services.productService.findAll()
    .then((result)=>res.status(status.OK).json({
        statusCode:status.CREATED,
        message:"products list",
        data:result
    }))
    .catch((error)=> res.status(status.INTERNAL_SERVER_ERROR).json({
        statusCode:status.INTERNAL_SERVER_ERROR,
        message:error.message
    }))  
}