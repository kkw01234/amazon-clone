import {$,$$} from "../utils"; 
import {header} from "../header";
import {nav} from "../nav";
import { Information } from "./information";
import { Table } from "./table";

export const managingMain = {
    init(){
        this.root = $('#root');
        fetch('/admin/findallbottom').then(async res=>{
            return res.json();
        }).then((result)=>{
            return result;
        }).then(this.makeBottomObjects.bind(this))
        .then(this.makeBottomTable.bind(this))
        .then(this.render.bind(this));
    },
    makeBottomObjects(bottoms){
        this.bottomTableHead = ["번호","제목","헤더","내용","URL내용","URL링크","이미지","색상","순서","수정/삭제"];
        return bottoms.reduce((prev,bottoms)=>{
            prev.push(new Information(bottoms,"bottom"));
            return prev;
        },[]);
    },
    makeBottomTable(bottomObjs){
        this.table = new Table({name : "bottom",
                                tableHead : this.bottomTableHead,
                                objs : bottomObjs});
    },
    render(){
        this.root.innerHTML = /*html*/`
        ${header.render()}
        <div class="admin-page">
            ${nav.render('admin')}
            <div class="admin-main">
                ${this.table.render()}
            </div>
        </div>
    `;
    this.table.addUserInformation();
    this.table.enrollEvent();
    header.addMenuEvent();
    }
}