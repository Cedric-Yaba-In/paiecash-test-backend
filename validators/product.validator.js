const {checkSchema} =require('express-validator')
const userService = require("../services/user.service")
const productService = require("../services/product.service")

module.exports.ProductCreationValidator=checkSchema({
    name:{
        notEmpty:true,
        isString:true
    },
    description:{
        notEmpty:true,
        isString:true
    },
    price:{
        isNumeric:true,
        notEmpty:true
    },
})
