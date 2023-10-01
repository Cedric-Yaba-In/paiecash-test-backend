const express = require("express")
const router = express.Router()
const userController = require("./../controllers/user.controller")

//list all
router.get("/list", userController.findAll)

module.exports=router
