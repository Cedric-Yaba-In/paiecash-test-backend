const {checkSchema} =require('express-validator')

module.exports.UserAuthValidator=checkSchema({
    email:{isEmail:true},
    password:{ isLength : { options: {min :8 }}}
},['body'])

module.exports.UserRegistrationValidator=checkSchema({
    email:{isEmail:true},
    password:{ isLength : { options: {min :8 }}},
    fullName:{notEmpty:true}
})