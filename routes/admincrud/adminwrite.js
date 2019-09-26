var express = require('express');
var router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,file, callback){
        callback(null, "public/static_root/");
    },
    filename: function(req,file,callback){
        callback(null, Date.now()+"-"+file.originalname);
    }
})
const upload = multer({storage : storage});

router.get('/',(req,res,next)=>{
    res.render('crudpage',{title:'insertpage'})
});
router.post('/upload',upload.single('image'),(req,res,next)=>{
    console.log(req.body);
    res.send({result : false});
});


module.exports = router;