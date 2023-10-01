const packageConst = require("./../constants/package.const")
module.exports = (sequelize,DataTypes) => {
    const Package = sequelize.define("packages",{

        name:{
            type:DataTypes.STRING,
            allowNull:false,
            notEmty:true
        },
        period:{
            type:DataTypes.ENUM,
            values:Object.values(packageConst.PACKAGE_PERIOD),
        },
        price:{
            type:DataTypes.ENUM,
            values:Object.values(packageConst.PACKAGE_PRICE),
        },
    })

    return Package
}