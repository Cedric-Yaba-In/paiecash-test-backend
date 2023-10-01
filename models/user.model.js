module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define("users",{
        fullName:{
            type:DataTypes.STRING,
            allowNull:false,
            notEmty:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            isEmail:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            notEmty:true
        }
    })

    return User

}