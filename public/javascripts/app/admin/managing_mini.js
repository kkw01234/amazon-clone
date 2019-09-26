import {$,$$} from "../utils"; 
import {header} from "../header";
import {nav} from "../nav";
import { Information } from "./information";
import { Table } from "./table";

export const managingMini = {
    init(){
        this.root = $('#root');
        fetch('/admin/findallmini').then(async res=>{
            return res.json();
        }).then((result)=>{
            return result;
        }).then(this.makeMiniObjects.bind(this))
        .then(this.makeMiniTable.bind(this))
        .then(this.render.bind(this));
    },
    makeMiniObjects(bottoms){
        this.bottomTableHead = [...Object.keys(bottoms[0]),"Modify"];
        return bottoms.reduce((prev,bottoms)=>{
            prev.push(new Information(bottoms,"mini"));
            return prev;
        },[]);
    },
    makeMiniTable(bottomObjs){
        this.table = new Table({name : "mini",
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