
export const nav={
    render(page = "main"){
        return this[`${page}pageRender`]();
    },
    adminpageRender(){
        return /*html*/`
                <nav class='admin-nav'>
                    <a>전체 사용자 조회</a>
                    <a>메인(하단) 카로셀 변경</a>
                    <a>미니 카로셀 변경</a>
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
