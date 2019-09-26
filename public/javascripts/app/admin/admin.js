import {UserInformation} from "./usercard";
import {Table} from "./usermanage";
import {header} from "../header";
import {nav} from "../nav";
import {$,$$} from "../utils"; 
const admin = {
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
            prev.push(new UserInformation(user));
            return prev;
        },[]);
    },
    makeUserTable(userObjs){
        this.table = new Table({name : "user",
                                tableHead : this.userTableHead,
                                userObjs});
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
    },
    
}

admin.init();