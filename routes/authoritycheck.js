const {UserDAO} = require("../src/dao/userdao");
const isLoggIn = (req,res,next)=>{
    if(req.isAuthenticated()){
        next();
    }else{
        res.status(403).send('로그인 필요');
    }
}  
const isNotLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        next();
    }else{
        res.status(403).send('이미 로그인 중입니다.');
    }
}
const isAdmin = async (req,res,next)=>{
    const authorityLevel = await UserDAO.findAuthorityLevel("admin");
    console.log(authorityLevel)
    if(req.session.passport.user.authority_level === authorityLevel){
        next();
    }else
        res.status(403).send('관리자가 아닙니다.')
} 
module.exports = {
    isLoggIn,
    isNotLoggedIn,
    isAdmin
}