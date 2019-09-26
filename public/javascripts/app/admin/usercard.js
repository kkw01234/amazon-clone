import { $ } from "../utils";
export class UserInformation {
    constructor(user, name = "none") {
        this.user = user;
        this.name = name;
    }
    render() {
        let rendering = `<tr>`;
        for (let i in this.user) {
            if(i === "image"){
                rendering += `<td class="${i}-${this.user.id}"><img src="${this.user[i]}" style="width:10rem;height:5rem;"></td>`;
                continue;
            }
            rendering += `<td class="${i}-${this.user.id}">${this.user[i]}</td>`;
        }
        if(name === "user"){
            rendering += `<td>
            <div class="change-authority" style="display:flex">
                <select name="auth-${this.user.id}-change">
                    <option value=""></option>
                    <option value="admin">관리자</option>
                    <option value="general">일반 사용자</option>
                </select>
                <button class="btn btn-auth-${this.user.id}-change">변경</button>
            </div>
        </td>`;
        }else{
            rendering +=` <button class="btn btn-auth-${this.user.id}-change">변경</button>`;
        }
        rendering+=`</tr>`;


        return rendering;
    }
    enrollEvent() {
        const userAuthChange = $(`.btn-auth-${this.user.id}-change`);
        userAuthChange.addEventListener('click', () => {
            const authChange = $(`select[name=auth-${this.user.id}-change]`).value;
            //fetch
            if(authChange === '') {
                alert('권한을 다시 선택해주세요');
                return;
            }
            fetch(`/admin/auth-change/${this.user.id}`, {
                method: `post`,
                body: JSON.stringify({
                        change_authority_name : authChange
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res =>{
                return res.json();
            }).then(data=>{
                if(!data.result){
                    alert('다시 한번 눌러주세요');
                    return; 
                }
                alert(`${data.id}님의 권한이 수정되었습니다.`);
                const authority = $(`.authority-${data.id}`);
                authority.innerHTML = data.authority_name;
            });
        });
    }
}