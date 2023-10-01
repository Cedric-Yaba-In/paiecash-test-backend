const db = require("./../shared/db")

module.exports.create=(userDTO)=>
{
    return db.models.users.create(userDTO)
}

module.exports.findAll=()=>{
    return db.models.users.findAll()
}

module.exports.findOneByField=(condition)=>{
    return db.models.users.findOne({where:condition});
}

module.exports.findAllByField=(condition)=>{
    return db.models.users.findAll(condition);
}