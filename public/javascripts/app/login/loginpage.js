import {$} from "../utils.js";
import {hex_sha512} from "../register/sha512.min.js"
const loginPage = {
    render(){
        return/*html*/`
                <div style="text-align:center;font-size:1.5rem">로그인 페이지</div>
                <div class="login">
                    <div style="text-align:center"><input type="text" name="id"></div>
                    <div style="text-align:center"><input type="password" name="password"></div>
                    <div class="btn-container"><button id="login-button" class="btn btn-success btn-large">로그인</button>
                    <button id="register-button" class="btn btn-success btn-large">회원가입</button></div>
                    <div class="error"></div>
                </div>   
        `;
    },
    enrollEvent(){
        this.loginButton = $("#login-button");
        this.registerButton = $('#register-button');
        this.loginButton.addEventListener("click",this.loginButtonHandler.bind(this));
        this.registerButton.addEventListener("click",this.registerButtonHandler.bind(this));
    },
    loginButtonHandler(){
        const id = $('input[name=id]').value;
        const password =  $('input[name=password]').value;
        fetch(`auth/login`,{
            method: `post`,
            body: JSON.stringify({
                id : id,
                password : hex_sha512(id + password)
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res)=>{
            res.json().then((data)=>{
                if(data.result){
                    window.location.href = "/";
                }else{
                    $(".error").innerHTML = "아이디와 비밀번호를 다시 확인해주세요";
                }
            });
        }).catch((res)=>{
            $(".error").innerHTML = "알수없는 에러가 발생했습니다."
        });
    },
    registerButtonHandler(){
        window.location.href = "/registerpage";
    }
}
const root = $('#root');
root.innerHTML = loginPage.render();
loginPage.enrollEvent();
