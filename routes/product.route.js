const express = require("express")
const router = express.Router()
const productController = require("../controllers/product.controller")
const validators = require("../validators")
const defaultControllerMiddlerWare = require("../shared/default-controller")
//create
router.post("/create", validators.ProductValidator.ProductCreationValidator,defaultControllerMiddlerWare.defaultControllerMiddlerWare,productController.create)

//list all
router.get("/list", productController.findAll)


module.exports=router