import { $ } from '../utils';
import { header } from "../header";
import { footer } from "../footer";
import { nav } from "../nav.js";
class InsertForm {
    constructor() {

    }
    init() {

        this.enrollEvent();


    }
    render() {
        return /*html*/`
    ${header.render()}
    <div style="display:flex;">
    ${nav.render('admin')}
    <div class="insert-page">
        <div class="select-type">
            <select name="type">
                <option value="main">메인(미완성)</option>
                <option value="bottom">하단</option>
                <option value="mini">미니(미완성)</option>
            </select>
        </div>
        <div class="insert-form">
        </div>
        <div style="text-align: center"><button class="btn btn-large insert-button">추가하기</button></div>
    </div>
    </div>
    </div>
    ${footer.render()}`
    }
    addRender() {

    }
    setOption() {
        fetch('/adminpage/write/setoption').then(res => {
            return res.json();
        }).then(result => {
            const option = $('select[name=title]');
            option.innerHTML = result.reduce((prev, curr) => {
                prev += `<option value="${curr.title}">${curr.title}</option>`;
                return prev;
            }, "");
        })

    }
    enrollEvent() {
        const button = $('.insert-button');
       
        const select = $(`select[name=type]`);
        button.addEventListener('click', function () {
            this.upload();
        }.bind(this));
      
        select.addEventListener('input', (e) => {
            console.log(select.value);
            if (select.value === 'bottom') {
                this.addBottomRender();
            } else if (select.value === 'mini') {
                this.addMiniRender();
            }
        });
    }
    addBottomRender() {
        const insertForm = $('.insert-form');
      
        const html = /*html*/`
         <div class="left-form">
             <p>이미지 선택</p>
             <input type="file" name="image-file">
             <img class="image-preview" style="max-width : 10rem; max-height : 10rem">
         </div>
         <div class="right-form">
             <!--오른쪽-->
             <div class="flex">
                 <span>머리말 : <input type="text" name="head"></span>
                 <span>색상 : <input type="color" name="color"></span>
             </div>
             <span>제목 :<select name="title"></select></span>
             <span>내용 :<textarea name="content"></textarea></span>
             <div class="flex">
                 주소내용 : <span><input type="text" name="url-content"></span>
                 주소 : <span><input type="text" name="link"></span>
             </div>
         </div>`;
         insertForm.innerHTML = html;
         this.image = $('input[name=image-file]');
         this.image.addEventListener('change', function (e) {
            const preview = $('.image-preview');
            console.log(this.image.files);
            if (this.image.files && this.image.files[0]) {
                const reader = new FileReader();
                reader.addEventListener('load', (e) => {
                    preview.setAttribute('src', e.target.result);
                });
                reader.readAsDataURL(this.image.files[0]);
            }
        }.bind(this));
        this.setOption();
    }
    addMiniRender() {
        const insertForm = $('.insert-form');
        const html = /*html*/`
    <div class="insert-form">
         <div class="left-form">
             <p>이미지 선택</p>
             <input type="file" name="image-file">
             <img class="image-preview" style="max-width : 10rem; max-height : 10rem">
         </div>
         <div>아직 미완성입니다. 버튼을 눌러도 반응하지 않습니다.</div>
         `;
         insertForm.innerHTML = html;
         this.image = $('input[name=image-file]');
         this.image.addEventListener('change', function (e) {
            const preview = $('.image-preview');
            if (this.image.files && this.image.files[0]) {
                const reader = new FileReader();
                reader.addEventListener('load', (e) => {
                    preview.setAttribute('src', e.target.result);
                });
                reader.readAsDataURL(this.image.files[0]);
            }
        }.bind(this));

        this.setOption();
    }
    upload() {
        this.image = $('input[name=image-file]');
        this.head = $('input[name=head]').value;
        this.color = $('input[name=color]').value;
        this.title = $('select[name=title]').value;
        this.content = $('textarea[name=content]').value;
        this.urlContent = $('input[name=url-content]').value;
        this.link = $('input[name=link]').value;
        if (!this.head || !this.color || !this.title || !this.content || !this.urlContent || !this.link || !this.image.files[0]) {
            console.log(this.head, this.color, this.title, this.content, this.urlContent, this.link);
            alert("다시한번 확인 부탁드립니다.");
            return;
        }
        const formdata = new FormData();
        formdata.append("image", this.image.files[0]);
        formdata.append("head", this.head);
        formdata.append("color", this.color);
        formdata.append('title', this.title);
        formdata.append('content', this.content);
        formdata.append('url_content', this.urlContent);
        formdata.append('link', this.link);
        fetch('/adminpage/write/upload', {
            method: `post`,
            body: formdata
        }).then(res => {
            return res.json();
        }).then(res => {
            if (res.result) {
                alert("추가가 완료되었습니다.");
                window.location.href = "/adminpage/read/main";
            } else
                alert("다시한번 확인해주세요");
        });
    }
}


const root = $('#root');
const insertForm = new InsertForm();
root.innerHTML = insertForm.render();
insertForm.init();
