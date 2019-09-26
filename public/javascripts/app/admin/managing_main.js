import {$,$$} from "../utils"; 
import {header} from "../header";
import {nav} from "../nav";

export const managingMain = {
    init(){
        this.root = $('#root');
        this.render();
    },
    render(){
        this.root.innerHTML = /*html*/`
        ${header.render()}
        <div class="admin-page">
            ${nav.render('admin')}
            <div class="admin-main">
              MAIN-ADMINS
            </div>
        </div>
    `;
    }
}