const path = __dirname+"/public/javascripts";

module.exports = {
    entry:{
        main:`${path}/app/main/main.js`,
        register: `${path}/app/register/register.js`
    },
    output:{
        path: path,
        filename: "[name].bundle.js",
    }
}