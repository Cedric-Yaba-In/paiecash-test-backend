const db = require("../shared/db")

module.exports.create=(productDTO)=>
{
    return db.models.product.create(productDTO)
}

module.exports.findAll=()=>{
    return db.models.product.findAll()
}

module.exports.findOneByField=(condition)=>{
    return db.models.product.findOne({where:condition});
}

module.exports.findByField=(condition)=>{
    return db.models.product.findAll({where:condition});
}

