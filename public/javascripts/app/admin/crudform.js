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
       this.image = $('input[name=image-file]');
       this.head = $('input[name=head]');
       this.color = $('input[name=color]');
       this.title = $('input[name=title]');
       this.content = $('textarea[name=content]');
       this.urlContent = $('input[name=url-content]');
       this.link = $('input[name=link]');
       const formdata = new FormData();
       console.log(this.image.files[0]);
       formdata.append("image",this.image.files[0]);
       formdata.append("head",this.head.value);
       formdata.append("color",this.color.value);
       formdata.append('title',this.title.value);
       formdata.append('content',this.content.value);
       formdata.append('url_content',this.urlContent.value);
       formdata.append('link',this.link.value);
       fetch('/adminpage/write/upload',{
           method : `post`,
           body : formdata
       }).then(res=>{
           console.log(res);
       })
   }
}

const a = new CrudForm();
a.init();