import {Information} from "./information";
import {Table} from "./table";
import {header} from "../header";
import {nav} from "../nav";
import {$,$$} from "../utils"; 
export const managingUser = {
    init(){
        this.root = $('#root');
        fetch('/admin/findalluser').then(async (res)=>{
            return res.json();
        }).then((result)=>{
            return result.users;
        }).then(this.makeUserObject.bind(this))
        .then(this.makeUserTable.bind(this))
        .then(this.render.bind(this));
        
    },
    makeUserObject(users){
        this.userTableHead = [...Object.keys(users[0]),"change_authority"];
        return users.reduce((prev,user)=>{
            prev.push(new Information(user,"user"));
            return prev;
        },[]);
    },
    makeUserTable(userObjs){
        this.table = new Table({name : "user",
                                tableHead : this.userTableHead,
                                objs : userObjs});
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
    },
    
}


// adminManagingUser.init(); //모든 Default값!