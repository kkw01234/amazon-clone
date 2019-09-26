
export const nav={
    render(page = "main"){
        return this[`${page}pageRender`]();
    },
    adminpageRender(){
        return /*html*/`
                <nav class='admin-nav'>
                    <a href="/adminpage/user">전체 사용자 조회</a>
                    <a href="/adminpage/read/main">하단 아이템 조회</a>
                    <a href="/adminpage/read/mini">미니 아이템 조회</a>
                    <a href="/adminpage/write">아이템 추가</a>
                </nav>
            `;
    },
    mainpageRender(){
        return /*html*/`
            <nav class='main-nav inactive'>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li>ABOUT US</li>
                    <li>CONTANT</li>
                </ul>
            </nav>`;
    },
}
