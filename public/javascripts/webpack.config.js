const path = __dirname+"/app";

module.exports = {
    entry:[`${path}/main.js`],
    output:{
        path: __dirname,
        filename: 'bundle.js',
    }
}