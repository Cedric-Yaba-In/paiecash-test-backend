const {Sequelize,DataTypes} = require("sequelize")
const sequelize  = new Sequelize(process.env.MySQL_DB,process.env.MySQL_User,process.env.MySQL_Password,
    {
    host: process.env.MySQL_Host,
    dialect: "mysql"
    }
)

module.exports = {
    Sequelize,
    sequelize,
    models: {
        users:require("./../models/user.model")(sequelize,DataTypes),
        package:require("./../models/package.model")(sequelize,DataTypes)
    }
}

