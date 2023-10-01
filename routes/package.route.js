const express = require("express")
const router = express.Router()
const packageController = require("./../controllers/package.controller")
const validators = require("./../validators")
const defaultControllerMiddlerWare = require("./../shared/default-controller")
//create
router.post("/create", validators.PackageValidator.PackageCreationValidator,defaultControllerMiddlerWare.defaultControllerMiddlerWare,packageController.create)



//list all
router.get("/list", packageController.findAll)

//subscriber list
router.get("/subscriber/:packageid",validators.PackageValidator.PackageSubscriberListValidator,defaultControllerMiddlerWare.defaultControllerMiddlerWare,packageController.listOfSubscriberUserByPackageId)


//subscribe
router.post("/subscribe/:userid/:packageid",validators.PackageValidator.PackageSubscribeValidator,defaultControllerMiddlerWare.defaultControllerMiddlerWare,packageController.subscribeToPackage)

//unsubscribe
router.post("/unsubscribe/:userid/:packageid",validators.PackageValidator.PackageSubscribeValidator,defaultControllerMiddlerWare.defaultControllerMiddlerWare,packageController.unsubscribeToPackage)


module.exports=router