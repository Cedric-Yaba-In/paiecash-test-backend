const express = require("express")
const router = express.Router()
const authController = require("./../controllers/auth.controller")
const validators = require("./../validators")
const defaultControllerMiddlerWare = require("./../shared/default-controller")
//login
router.post("/login", validators.UserValidator.UserAuthValidator,defaultControllerMiddlerWare.defaultControllerMiddlerWare,authController.login)



//registration
router.post("/register",validators.UserValidator.UserRegistrationValidator,defaultControllerMiddlerWare.defaultControllerMiddlerWare, authController.register)

module.exports=router