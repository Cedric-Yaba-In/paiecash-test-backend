const db = require("./../shared/db")

module.exports.create=(packageDTO)=>
{
    return db.models.package.create(packageDTO)
}

module.exports.findAll=()=>{
    return db.models.package.findAll()
}

module.exports.findOneByField=(condition)=>{
    return db.models.package.findOne({where:condition});
}

module.exports.findByField=(condition)=>{
    return db.models.package.findAll({where:condition});
}

