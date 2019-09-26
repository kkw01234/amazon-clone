import {$} from '../utils';
class CrudForm{
   constructor(){

   }
   init(){
        const button = $('.insert-button');
        button.addEventListener('click',function(){
            this.upload();
        }.bind(this));
   }
   render(){

   }
   upload(){
       const formdata = new FormData();
       const image = document.querySelector('input[name=image-file]');
       formdata.append("image",image.files[0]);
       console.log(image.files[0])
       fetch('/adminpage/write/upload',{
           method : `post`,
           body : formdata,
        //    headers : {
        //        "Content-Type" : `multipart/form-data`
        //    }
       }).then(res=>{
           console.log(res);
       })
   }
}

const a = new CrudForm();
a.init();