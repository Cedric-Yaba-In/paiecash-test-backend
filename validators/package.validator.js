const {checkSchema} =require('express-validator')
const packageConst = require("./../constants/package.const")
const userService = require("./../services/user.service")
const packageService = require("./../services/package.service")

module.exports.PackageCreationValidator=checkSchema({
    name:{
        notEmpty:true,
        isString:true
    },
    period:{
        isIn:{
            options:[Object.values(packageConst.PACKAGE_PERIOD),]
        }
    },
    price:{
        isIn:{options:[Object.values(packageConst.PACKAGE_PRICE),]}
    },
})


module.exports.PackageSubscribeValidator=checkSchema({
    userid:{
        custom:{
            options:async (value)=>{
                let userfound = await userService.findOneByField({id:value});
                if(!userfound) throw new Error(`User with id ${value} not exist`);
            }
        }
    },
    packageid:{
        custom: {
            options:async (value)=>{
                let packageFound = await packageService.findOneByField({id:value});
                if(!packageFound) throw new Error(`Package with id ${value} not exist`);
            }
        }
    },
})

module.exports.PackageSubscriberListValidator=checkSchema({
    packageid:{
        custom: {
            options:async (value)=>{
                let packageFound = await packageService.findOneByField({id:value});
                if(!packageFound) throw new Error(`Package with id ${value} not exist`);
            }
        }
    },
})