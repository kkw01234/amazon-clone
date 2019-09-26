import {nav} from './nav.js';
export const header = {
    render(username = false,isAdmin) {
        return username ? this.log_in_status(username, isAdmin) : this.not_log_in_status();
    },
    log_in_status(username, isAdmin) {
        return /*html*/`<header class="header">
                            <div class="header-top">
                                <span class="left-header">
                                    <a href="/">
                                        <img class="logo" src="/images/logo.png">
                                    </a>
                                </span>
                                <span class="right-header">
                                    <span style="color:white;font-size:1.2em">${username}님 환영합니다.</span>
                                    <a class="btn btn-middle" href="/auth/logout">Log out</a>
                                    ${isAdmin ? this.addAdminPageButton() :`<a class="btn btn-middle">My page</a>`}
                                    <img class="menu-icon" src="/images/menu.svg" >
                                </span>
                            </div>
                        ${nav.render('main')}
                        </header>`;
                        
    },
    addAdminPageButton(){
        return `<a class="btn btn-middle" href="/adminpage">관리 페이지</a>`;
    },
    not_log_in_status() {
        return /*html*/`<header class="header">
                            <div class="header-top">
                                <span class="left-header">
                                    <a href="/">
                                        <img class="logo" src="/images/logo.png">
                                    </a>
                                </span>
                                <span class="right-header">
                                    <a class="btn btn-middle" href="/loginpage">Sign in</a> 
                                    <a class="btn btn-middle" href="/registerpage"> Sign up</a>
                                    <img class="menu-icon" src="/images/menu.svg">
                                </span>
                            </div>
                            ${nav.render('main')}
                        </header>`;
                        
    }, 
    addMenuEvent(){
        const menuicon = document.querySelector(".menu-icon");
        menuicon.addEventListener('click',()=>{
            const menu = document.querySelector(".main-nav");
            if(menu.classList.contains("inactive")){
                menu.classList.remove('inactive');
            }else
                menu.classList.add('inactive');
        });
    },
}