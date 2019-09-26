import {managingMain} from "./managing_main";
import {managingUser} from "./managing_user";
import {managingMini} from "./managing_mini";
// import {} from "./"

const page = {
    "/adminpage" : ()=>{managingUser.init()},
    "/adminpage/user" :  ()=>{managingUser.init()},
    "/adminpage/read/main" :  ()=>{managingMain.init()}, //조회
    "/adminpage/read/mini" : ()=>{managingMini.init()},
}
export const admin = {
    init(){
        page[window.location.pathname]();
    }
}

admin.init();