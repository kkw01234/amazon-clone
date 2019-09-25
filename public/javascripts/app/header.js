export const header = {
    render(username = false) {
        console.log(username);
        return username ? this.log_in_status(username) : this.not_log_in_status();
    },
    log_in_status(username) {
        return /*html*/`<header class="header">
                            <div class="header-top">
                                <span class="left-header">
                                    <a href="/">
                                        <img class="logo" src="../images/logo.png">
                                    </a>
                                </span>
                                <span class="right-header">
                                    <span style="color:white;font-size:1.2em">${username}님 환영합니다.</span>
                                    <a class="btn btn-middle" href="/logout">Log out</a>
                                    <a class="btn btn-middle">My page</a>
                                    <img class="menu-icon" src="../images/menu.svg" >
                                </span>
                            </div>
                        <div class="menu" style="display:none">${this.setMenu}</div>
                        </header>`;
                        
    },
    not_log_in_status() {
        return /*html*/`<header class="header">
                            <div class="header-top">
                                <span class="left-header">
                                    <a href="/">
                                        <img class="logo" src="../images/logo.png">
                                    </a>
                                </span>
                                <span class="right-header">
                                    <a class="btn btn-middle" href="/loginpage">Sign in</a> 
                                    <a class="btn btn-middle" href="/registerpage"> Sign up</a>
                                    <img class="menu-icon" src="../images/menu.svg">
                                </span>
                            </div>
                            <div class="menu" style="display:none">${this.setMenu}</div>
                        </header>`;
                        
    }, 
    setMenu() {  
       return /*html*/ `
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li>ABOUT US</li>
                    <li>CONTANT</li>
                </ul>`;
    },
    addLogoutEvent(){
        const logout = document.querySelector(".logout");
        logout.addEventListener("click", this.addLogoutHandler); 
    },
    addMenuEvent(){
        const menuicon = document.querySelector(".menuicon");
        menuicon.addEventListener('click',()=>{
            const menu = document.querySelector(".menu");
            if(menu.style.display === 'none'){
                menu.style.display = 'block';
            }else{
                menu.style.display = 'none';
            }
        });
    },
}