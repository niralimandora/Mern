const schema = require("../model/firstSchema")
const bcrypt = require("bcryptjs")

module.exports.register = async (req,res)=>{
    let user = await schema.findOne({email : req.body.email})
    if(user){
        return res.status(200).json({msg : "User already existed !",code : 200})
    }
    req.body.password = await bcrypt.hash(req.body.password,10);
    await schema.create(req.body).then(()=>{
        res.status(200).json({msg:"User successfully registered!",code :100})
    })
}

module.exports.loginUser=async(req,res)=>{
    let user = await schema.findOne({email  :req.body.email});
    if(!user){
        return res.status(200).json({msg : "User not existed !"})
    }
    if(await bcrypt.compare(req.body.password,user.password)){
        res.status(200).json({msg : "Login Successfully !"})
    }else{
        res.status(200).json({msg : "Password is wrong !"})
    }
}