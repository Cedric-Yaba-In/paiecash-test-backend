const {Sequelize,DataTypes} = require("sequelize")
const sequelize  = new Sequelize(process.env.MySQL_DB,process.env.MySQL_User,process.env.MySQL_Password,
    {
    host: process.env.MySQL_Host,
    dialect: "mysql"
    }
)
const userModel = require("./../models/user.model")(sequelize,DataTypes)
const packageModel = require("./../models/package.model")(sequelize,DataTypes)
const productModel = require("./../models/product.model")(sequelize,DataTypes)

userModel.belongsToMany(packageModel, { through: 'subscription' });
packageModel.belongsToMany(userModel, { through: 'subscription' });


module.exports = {
    Sequelize,
    sequelize,
    models: {
        users:userModel,
        package:packageModel,
        product:productModel
    }
}

