import { $ } from "../utils";
export class UserInformation {
    constructor(user) {
        this.user = user;
    }
    render() {
        let rendering = `<tr>`;
        for (let i in this.user) {
            rendering += `<td class="${user.id}-${i}">${this.user[i]}</td>`;
        }
        rendering += `<td>
                        <div class="change-authority" style="display:flex">
                            <select name="${user.id}-auth-change">
                                <option></option>
                                <option>관리자</option>
                                <option>일반 사용자</option>
                            </select>
                            <button class="btn btn-${user.id}-auth-change>변경</button>
                        </div>
                    </td>`
        rendering += `</tr>`;


        return rendering;
    }
    enrollEvent() {
        const userAuthChange = $(`.btn-${user.id}-auth-change`);
        userAuthChange.addEventListener('click', () => {
            const authChange = $(`.${user.id}-auth-change`).value;
            //fetch
            if(authChange === '') {
                alert('권한을 다시 선택해주세요');
                return;
            }
            fetch('/admin/autChange', {
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
                const authority_level = $(`${data.result.id}-authority_level`);
                authority_level.value = data.result.authority_level;
            });
        });
    }
}