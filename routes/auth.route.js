const express = require("express")
const router = express.Router()
const authController = require("./../controllers/auth.controller")

//login
router.post("/login", authController.login)



//registration
router.post("/register",authController.register)

module.exports=router