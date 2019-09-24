const path = __dirname+"/public/javascripts";

module.exports = {
    entry:{
        main:`${path}/app/main/main.js`,
        register: `${path}/app/register/register.js`,
        loginpage : `${path}/app/login/loginpage.js`
    },
    output:{
        path: path,
        filename: "[name].bundle.js",
    }
}