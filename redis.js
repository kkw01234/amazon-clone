var redis = require('redis');



var redisClient = redis.createClient({host:'106.10.35.161'});

// redisClient.auth({}, function (err) {

//     if (err) throw err;

// });

redisClient.on('error', function(err) {

    console.log('Redis error: ' + err);

});

module.exports = redisClient;
