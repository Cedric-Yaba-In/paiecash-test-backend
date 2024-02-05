module.exports = (sequelize,DataTypes) => {
    const Product = sequelize.define("Products",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            notEmty:true
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            isEmail:true
        },
        price:{
            type:DataTypes.INTEGER,
            allowNull:0,
            notEmty:true
        }
    })

    return Product

}