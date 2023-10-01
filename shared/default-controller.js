const {  validationResult } = require('express-validator');
const status = require("http-status")
module.exports.defaultControllerMiddlerWare=(req,res,next)=>{
    const result = validationResult(req);
    if (result.isEmpty()) return next()
    return res.status(status.BAD_REQUEST).json({
        statusCode:status.BAD_REQUEST,
        error:result.array()
    })
}