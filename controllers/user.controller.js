const services = require("./../services")
const status = require("http-status")


module.exports.findAll = async (req,res)=>{
    services.userService.findAll()
    .then((result)=>res.status(status.OK).json({
        statusCode:status.CREATED,
        message:"users list",
        data:result
    }))
    .catch((error)=> res.status(status.INTERNAL_SERVER_ERROR).json({
        statusCode:status.INTERNAL_SERVER_ERROR,
        message:error.message
    }))  
}