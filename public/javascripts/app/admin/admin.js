import {managingMain} from "./managing_main";
import {managingUser} from "./managing_user";
// import {} from "./"

const page = {
    "/adminpage" : ()=>{managingUser.init()},
    "/adminpage/user" :  ()=>{managingUser.init()},
    "/adminpage/read/main" :  ()=>{managingMain.init()}, //조회
    "/adminpage/insert/" : ()=>{},
    "/adminpage/read/mini/" : ()=>{},
}
export const admin = {
    init(){
        page[window.location.pathname]();
    }
}

admin.init();