const users=require('../users.json')
function getAllUsers(req,res){
    try{
        res.json(users)
    }catch(err){

    }
}
function getParticularUser(req,res){
    try{
        let id=req.params.id
        let user=users.find(user=>user.id===id)
        res.json(user)
    }
    catch(err){

    }
}
module.exports={getAllUsers,getParticularUser}