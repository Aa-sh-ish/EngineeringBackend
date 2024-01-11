const jwt = require('jsonwebtoken');

const verifyTocken =async(req,res,next)=>{
    const authHeaders = req.headers.authorization;
    if(authHeaders){
        const token = authHeaders.split(" ")[1];
        jwt.verify(token,process.env.JWT_SEC,async(err,user)=>{
            if(err){
               return res.status(403).json({status :false,message:"invalid tocken"})
            }
            req.user = user;
            next();
        });

    }
    else{
        return res.status(403).json({status :false,message:"Cant Connect"});

    }
}


const verifyAndAuthorization = async(req,res,next)=>{    
    verifyTocken(req,res,()=>{
        if(
        req.user.userType==="Student"||
        req.user.userType==="Admin"){
            next();
        }else{
            res.status(403).json({status:false,message:"You Are Not Authorized and verifed user"})
        }
    })
}


const verifyAdmin = (req,res,next)=>{
    verifyTocken(req,res,()=>{
        if(
        req.user.userType==="Admin"){
            next();
        }else{
            res.status(403).json({status:false,message:"You Are Not Authorized admin"})
        }
    })
}

module.exports = {verifyTocken,verifyAndAuthorization,verifyAdmin}