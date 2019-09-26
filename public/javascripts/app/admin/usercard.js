import { $ } from "../utils";
export class UserInformation {
    constructor(user) {
        this.user = user;
    }
    render() {
        let rendering = `<tr>`;
        for (let i in this.user) {
            rendering += `<td class="${i}-${this.user.id}">${this.user[i]}</td>`;
        }
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
        rendering+=`</tr>`;


        return rendering;
    }
    enrollEvent() {
        const userAuthChange = $(`.btn-auth-${this.user.id}-change`);
        userAuthChange.addEventListener('click', () => {
            const authChange = $(`select[name=auth-${this.user.id}-change]`).value;
            console.log(authChange);
            //fetch
            if(authChange === '') {
                alert('권한을 다시 선택해주세요');
                return;
            }
            fetch('/admin/auth-change', {
                method: `post`,
                body: JSON.stringify({
                        id : this.user.id,
                        authChange : authChange
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res =>{
                return res.json();
            }).then(data=>{
                //data.result
                if(!data.result.result){
                    alert('다시 한번 눌러주세요');
                    return;
                }
                alert(`${data.result.id}님의 권한이 수정되었습니다.`);
                const authority_level = $(`authority_level-${data.result.id}`);
                authority_level.value = data.result.authority_level;
            });
        });
    }
}