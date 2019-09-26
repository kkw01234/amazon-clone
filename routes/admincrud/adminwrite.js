var express = require('express');
var router = express.Router();
const {mainCardCarousel,bottomCarousel} = require('../../src/dao/carouseldao');
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
router.get('/setoption',async (req,res,next)=>{
    const result = await mainCardCarousel.findTitle();
    res.send(result);
});
router.post('/upload',upload.single('image'),async (req,res,next)=>{
    const {title,head,content,url_content,link,color} = req.body;
    const image = req.file.filename;
    const result = await bottomCarousel.insert({
        title,
        head,
        content,
        url_content,
        link,
        image,
        color
    });
    res.send({result});
});


module.exports = router;