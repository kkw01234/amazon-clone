import {$} from '../utils';
class CrudForm{
   constructor(){

   }
   init(){
        const button = $('.insert-button');
        button.addEventListener('click',function(){
            this.upload();
        }.bind(this));
        this.setOption();
   }
   render(){
   }
   setOption(){
       fetch('/adminpage/write/setoption').then(res=>{
            return res.json();
       }).then(result=>{
            const option = $('select[name=title]');
            option.innerHTML = result.reduce((prev,curr)=>{
                prev+=`<option value="${curr.title}">${curr.title}</option>`;
                return prev;
            },"");
       })
       
   }
   upload(){
       this.image = $('input[name=image-file]');
       this.head = $('input[name=head]').value;
       this.color = $('input[name=color]').value;
       this.title = $('select[name=title]').value;
       this.content = $('textarea[name=content]').value;
       this.urlContent = $('input[name=url-content]').value;
       this.link = $('input[name=link]').value;
       if(!this.head || !this.color || !this.title || !this.content || !this.urlContent || !this.link || !this.image.files[0]){
           console.log(this.head,this.color,this.title,this.content,this.urlContent,this.link);
           alert("다시한번 확인 부탁드립니다.");
           return;
       }
       const formdata = new FormData();
       console.log(this.image.files[0]);
       formdata.append("image",this.image.files[0]);
       formdata.append("head",this.head);
       formdata.append("color",this.color);
       formdata.append('title',this.title);
       formdata.append('content',this.content);
       formdata.append('url_content',this.urlContent);
       formdata.append('link',this.link);
       fetch('/adminpage/write/upload',{
           method : `post`,
           body : formdata
       }).then(res=>{
          return res.json();
       }).then(res=>{
           if(res.result){
                alert("추가가 완료되었습니다.");
                window.location.href="/adminpage/read/main"
           }else  
                alert("다시한번 확인해주세요");
       });
   }
}

const a = new CrudForm();
a.init();