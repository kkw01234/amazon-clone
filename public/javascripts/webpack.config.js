const path = __dirname+"/app";

module.exports = {
    entry:[`${path}/main.js`,`${path}/carousel.js`],
    output:{
        path: __dirname,
        filename: 'bundle.js',
    }
}