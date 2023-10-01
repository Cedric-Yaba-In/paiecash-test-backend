const bcrypt=require("bcryptjs")


module.exports={
    hashPassword:(password)=>
    {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    },

    comparePassword:(savedPassword,newPassword)=>
    {
        return bcrypt.compareSync(newPassword,savedPassword)
    }
}