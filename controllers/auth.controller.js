const services = require("./../services")
const constError = require("./../constants/error.const")
const passwordFunc = require("./../shared/password")
const jwt = require("jsonwebtoken")
const status = require("http-status")

module.exports.register=async (req,res)=>
{       
    let userRegisterDTO=req.body
    let foundUser = await services.userService.findOneByField({email:userRegisterDTO.email})
    if(foundUser===null) {
        services.userService.create({...userRegisterDTO,password:passwordFunc.hashPassword(userRegisterDTO.password)})
        .then((result)=>res.status(status.CREATED).json({
            statusCode:status.CREATED,
            message:"User created"
        }))
        .catch((error)=> res.status(status.INTERNAL_SERVER_ERROR).json({
            statusCode:status.INTERNAL_SERVER_ERROR,
            message:error.message
        }))
    }
    else res.status(status.BAD_REQUEST).json({
        statusCode:status.BAD_REQUEST,
        message:"User already exist"
    })
}

module.exports.login=async (req,res)=>{
    let userLoginDTO = req.body
    let foundUser = await services.userService.findOneByField({email:userLoginDTO.email})

    if(foundUser!==null && passwordFunc.comparePassword(foundUser.password,userLoginDTO.password))
    {
        const token = jwt.sign({email:foundUser.email,id:foundUser.id},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.status(status.OK).json({
            statusCode:status.OK,
            data:{
                access_token:token,
                user:foundUser
            }
        })
    }
    else  res.status(status.BAD_REQUEST).json({
        statusCode:status.BAD_REQUEST,
        message:"Email/password incorrect"
    })
}