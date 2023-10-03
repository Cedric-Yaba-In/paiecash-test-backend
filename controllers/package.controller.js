const services = require("./../services")
const status = require("http-status")
const db = require("./../shared/db")

module.exports.create=async (req,res)=>
{     
    services.packageService.create(req.body)
    .then((result)=>res.status(status.CREATED).json({
        statusCode:status.CREATED,
        message:"package created"
    }))
    .catch((error)=> res.status(status.INTERNAL_SERVER_ERROR).json({
        statusCode:status.INTERNAL_SERVER_ERROR,
        message:error.message
    }))   
}

module.exports.findAll = async (req,res)=>{
    services.packageService.findAll()
    .then((result)=>res.status(status.OK).json({
        statusCode:status.CREATED,
        message:"packages list",
        data:result
    }))
    .catch((error)=> res.status(status.INTERNAL_SERVER_ERROR).json({
        statusCode:status.INTERNAL_SERVER_ERROR,
        message:error.message
    }))  
}

module.exports.findByField = async (req,res)=>{
    
    services.packageService.findByField(req.query)
    .then((result)=>res.status(status.OK).json({
        statusCode:status.OK,
        message:"packages list by field",
        data:result
    }))
    .catch((error)=> res.status(status.INTERNAL_SERVER_ERROR).json({
        statusCode:status.INTERNAL_SERVER_ERROR,
        message:error.message
    }))  
}

module.exports.subscribeToPackage=async (req,res)=>{
    let foundUser = await services.userService.findOneByField({id:req.params.userid})
    let foundPackage = await services.packageService.findOneByField({id:req.params.packageid});
    foundUser.addPackage(foundPackage).then((result)=>res.status(status.OK).json({
        statusCode: status.OK,
        message:"User successfully subscribed"
    })).catch((error)=> res.status(status.INTERNAL_SERVER_ERROR).json({
        statusCode:status.INTERNAL_SERVER_ERROR,
        message:error.message
    }))
}

module.exports.unsubscribeToPackage=async (req,res)=>{
    let foundUser = await services.userService.findOneByField({id:req.params.packageid})
    let foundPackage = await services.packageService.findOneByField({id:req.params.packageid});
    foundUser.removePackage(foundPackage).then((result)=>res.status(status.OK).json({
        statusCode: status.OK,
        message:"User successfully unsubscribed"
    })).catch((error)=> res.status(status.INTERNAL_SERVER_ERROR).json({
        statusCode:status.INTERNAL_SERVER_ERROR,
        message:error.message
    }))
}


module.exports.listOfSubscriberUserByPackageId = async (req,res)=>{
    services.userService.findAllByField({
        where:{'$packages->subscription.packageid$':req.params.packageid},
        include: db.models.package
    }).then((result)=>res.status(status.OK).json({
        statusCode:status.OK,
        message:"user list by packageId",
        data:result
    }))
    .catch((error)=>  res.status(status.INTERNAL_SERVER_ERROR).json({
        statusCode:status.INTERNAL_SERVER_ERROR,
        message:error.message
    }))  
}

module.exports.listOfSubscriberAllUser = async (req,res)=>{
    services.userService.findAllByField({
        include: db.models.package
    }).then((result)=>res.status(status.OK).json({
        statusCode:status.OK,
        message:"user list",
        data:result
    }))
    .catch((error)=>  res.status(status.INTERNAL_SERVER_ERROR).json({
        statusCode:status.INTERNAL_SERVER_ERROR,
        message:error.message
    }))  
}
