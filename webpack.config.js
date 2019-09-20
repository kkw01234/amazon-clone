const path = __dirname+"/public/javascripts";

module.exports = {
    entry:[`${path}/app/main.js`],
    output:{
        path: path,
        filename: "bundle.js",
    }
}